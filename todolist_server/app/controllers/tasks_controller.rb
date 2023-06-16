class TasksController < ApplicationController
  before_action :set_to_do_list
  before_action :set_task, only: %i[ show update destroy ]

  # GET /tasks
  def index
    @tasks = @to_do_list.tasks

    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = @to_do_list.tasks.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = @to_do_list.tasks.find(params[:id])
    end

    def set_to_do_list
      @to_do_list = ToDoList.find(params[:to_do_list_id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:description, :is_done)
      # params.require(:task).permit(:description, :isDone, :to_do_list_id) 
    end
end
