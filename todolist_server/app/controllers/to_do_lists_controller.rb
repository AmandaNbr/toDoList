class ToDoListsController < ApplicationController
  before_action :set_to_do_list, only: %i[ show update destroy ]

  # GET /to_do_lists
  def index
    @to_do_lists = ToDoList.all

    render json: @to_do_lists
  end

  # GET /to_do_lists/1
  def show
    render json: @to_do_list
  end

  # POST /to_do_lists
  def create
    @to_do_list = ToDoList.new(to_do_list_params)

    if @to_do_list.save
      render json: @to_do_list, status: :created, location: @to_do_list
    else
      render json: @to_do_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /to_do_lists/1
  def update
    if @to_do_list.update(to_do_list_params)
      render json: @to_do_list
    else
      render json: @to_do_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /to_do_lists/1
  def destroy
    @to_do_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_to_do_list
      @to_do_list = ToDoList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def to_do_list_params
      params.require(:to_do_list).permit(:title)
    end
end
