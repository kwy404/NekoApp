require 'digest'

class Api::V1::UsersController < ApplicationController
  before_action :allowCors
  skip_before_action :verify_authenticity_token

  def generate_token
    string_length = 120
    # Generate a token for the user
    return rand(36**string_length).to_s(36)
  end

  def update(id)
    @user = User.find(id)
    @user.token = generate_token()
    @user.save
    
    # Remove password from params
    @user.password = nil
    @user.password_confirmation = nil
  end

  # Reset password by id
  def reset_password
    @user = User.find(params[:id])
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirmation]
    @user.save
  end

  def validationToken
    @user = User.find_by(token: params[:token])
    @user.password = nil
    @user.password_confirmation = nil
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
      render json: {status: "Error", message: "E-mail ou senha Inválidos."}, status: :ok
    end
  end

  def create
    if email_already_created()
      render json: {status: "Error", message: "E-mail já cadastrado."}, status: :ok
      return
    end
    if username_already_created()
      render json: {message: "Nome de usuário já cadastrado"}, status: :ok
      return
    end
    password_encrypted = Digest::SHA2.hexdigest params[:password]
    @user = User.create(username: params[:username], 
                        email: params[:email], 
                        password: password_encrypted,
                        token: generate_token(),
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
      render json: {message: "usuário não criado"}, status: :unprocessable_entity
    end
  end

  private
    def email_already_created
      @validation = User.find_by({ "email": params[:email] })
      if @validation
        true
      end
    end

    def username_already_created
      @validation = User.find_by({ "username": params[:username] })
      if @validation
        true
      end
    end

end
