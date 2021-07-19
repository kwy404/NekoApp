require 'digest'

class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def generate_token
    string_length = 120
    # Generate a token for the user
    return rand(36**string_length).to_s(36)
  end

  def update(id)
    @user = User.find(id)
    @user.token = generateToken()
    @user.save
  end

  # Reset password by id
  def reset_password
    @user = User.find(params[:id])
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirmation]
    @user.save
  end

  def login
    password_encrypted = Digest::SHA2.hexdigest params[:password]
    @user = User.find_by({ "email": params[:email], "password": password_encrypted })
    
    if @user
      update(@user._id)
      render json: @user, status: :ok
    else 
      render json: {status: "Error", message: "E-mail ou senha Inválidos."}, status: :unauthorized
    end
  end

  def create
    if email_already_created()
      render json: {status: "Error", message: "E-mail já cadastrado."}, status: :unauthorized
      return
    end
    if username_already_created()
      render json: {message: "Nome de usuário já cadastrado"}, status: :unprocessable_entity
      return
    end
    password_encrypted = Digest::SHA2.hexdigest params[:password]
    @user = User.create(username: params[:username], 
                        email: params[:email], 
                        password: password_encrypted,
                        token: generateToken(),
                        admin: 'False',
                        beta: :beta,
                        avatar: "",
                        cover: "",
                        friends: [],
                        badges: []
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
