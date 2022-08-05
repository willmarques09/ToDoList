import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { ICreateTask, ITaskRepository } from '../interface';

@injectable()
class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  public async create({user_id, title, description, limit_date }: ICreateTask) {
    const taskExists = await this.taskRepository.findByName(title);

    if (taskExists) {
      throw new AppError('There is already one task with this name');
    }

    const product = await this.taskRepository.create({user_id, title, description, limit_date});

    return product;
  }
}
export default CreateTaskService;
