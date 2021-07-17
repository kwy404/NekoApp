class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token  

  def create
    @user = User.create(name: params[:name], email: params[:email], password: params[:password])

    if @user.save
      render json: @user, status: :ok
    else
      render json: {message: "usuário não criado"}, status: :unprocessable_entity
    end
  end
end
