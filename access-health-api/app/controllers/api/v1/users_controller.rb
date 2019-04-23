class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show]

  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def index
  	@users = User.all
  	render json: @users
  end

  def show
  	render json: @user
  end

  def create
  	@user = User.create(user_params)
  	if @user.valid?
  	  @token = encode_token(user_id: @user.id)
  	  render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
  	else
  	  render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
  	end
  end

  private

  def user_params
  	params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def find_user
  	@user = User.find(params[:id])
  end
end
