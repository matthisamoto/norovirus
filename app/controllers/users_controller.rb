class UsersController < ApplicationController

  def index
    @list = User.all
    @count = User.count
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:message] = "Successfully Created Level"
      redirect_to "/"
    else
      render new_level_path
    end
  end
  
  def destroy
    @user = User.find(params[:id]).destroy
    flash[:message] = "Successfully Deleted Level #{params[:id]}"
    redirect_to "/"
  end
  
end