class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token  

  def create
    @user = User.create(username: params[:username], email: params[:email], encrypted_password: params[:password], remember_user_token: Devise.friendly_token+username)

    if @user.save
      render json: @user, status: :ok
    else
      render json: {message: "usuário não criado"}, status: :unprocessable_entity
    end
  end
end
