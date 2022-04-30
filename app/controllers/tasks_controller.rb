class TasksController < ApplicationController
  before_action :find_by_id, only:[:toggle, :edit, :update, :destroy] 
	def index
     @tasks = Task.all 
     @task = Task.new
  end

  def create
    @task = Task.new(clean_task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_url, notice: "成功建立任務" }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @task.update(clean_task_params)
        format.html {redirect_to tasks_url, notice:"更新成功"}
      else
        format.html {render :edit, status: :unprocessable_entity}
      end
    end
  end

  def destroy 
    @task.destroy
    redirect_to tasks_url, notice: "刪除成功"
  end

  def toggle
    @task.update(completed: params[:completed])
  
    # render json: { message: "完成任務 " }
  end
  

  private

  def clean_task_params
    params.require(:task).permit(:description)
  end

  def find_by_id
     @task = Task.find(params[:id])
  end
end
