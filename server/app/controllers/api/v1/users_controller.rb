require 'digest'

class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update(id)
    @user = User.find(id)
    @user.token = generate_token
    @user.save
  end

  def reset_password
    @user = User.find(params[:id])
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirmation]
    @user.save
  end

  def validation_token
    @user = User.find_by(token: params[:token])
    if @user
      render json: @user, status: :ok
    else
      render json: { error: 'Token inválido' }, status: :unprocessable_entity
    end
  end

  def login
    password_encrypted = Digest::SHA2.hexdigest params[:password]
    @user = User.find_by({ "email": params[:email], "password": password_encrypted })
    
    if @user
      update(@user._id)
      render json: @user, status: :ok
    else 
      render json: {
        status: "Error",
        message: I18n.t("api.v1.users.login.invalid_data.message")
      }, status: :unauthorized
    end
  end

  def create
    return email_already_create_response if email_already_created?

    return username_already_create_response if username_already_created?

    password_encrypted = Digest::SHA2.hexdigest params[:password]
    @user = User.create(username: params[:username], 
                        email: params[:email], 
                        password: password_encrypted,
                        token: generate_token,
                        admin: 'False',
                        beta: :beta,
                        avatar: "",
                        cover: "",
                        friends: [],
                        badges: [],
                        notifications: []
                        )

    if @user.save
      render json: @user, status: :ok
    else
      generic_error_message()
    end
  end

  private

    def generate_token
      string_length = 120

      return rand(36**string_length).to_s(36)
    end

    def email_already_created?
      @validation = User.find_by({ "email": params[:email] })
      if @validation
        true
      end
    end

    def username_already_created?
      @validation = User.find_by({ "username": params[:username] })
      if @validation
        true
      end
    end

    def update(id)
    @user = User.find(id)
    @user.token = generate_token
    @user.save
  end

  def email_already_create_response
    render json: {
        status: "Error",
        message: I18n.t("api.v1.users.register.email_already_exist.message")
      }, status: :unprocessable_entity
  end

  def username_already_create_response
    render json: {
      message: I18n.t("api,v1.users.register.username_already_exist")
    }, status: :unprocessable_entity
  end

  def generic_error_message
    render json: {
      message: I18n.t("api.v1.users.register.error")
    }, status: :unprocessable_entity
  end
end
