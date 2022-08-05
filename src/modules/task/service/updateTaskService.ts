import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { ITask, ITaskRepository, IUpdate } from '../interface';


@injectable()
class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}
  async update({ id, user_id, title, description, limit_date }: IUpdate) {
    const titleExists = await this.taskRepository.findByTitle(title);
    const updateTask = await this.taskRepository.findById(id);
console.log(titleExists);
console.log(updateTask);


    if (!updateTask) {
      throw new AppError('Task not found', 404);
    }

    if (titleExists && title !== updateTask.title) {
      throw new AppError('There is already one product with this email', 409);
    }

    updateTask.title = title;
    updateTask.description = description;
    updateTask.limit_date = limit_date;
    updateTask.user_id = user_id

    await this.taskRepository.save(updateTask);

    return updateTask;
  }
}

export default UpdateTaskService;