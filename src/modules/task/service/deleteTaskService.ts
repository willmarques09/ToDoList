import { inject, injectable } from 'tsyringe';
import AppError from '../../../utils/error';
import { ITaskRepository } from '../interface';



@injectable()
class DeleteUsersService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}
  async delete(id: string) {
    const removeUser = await this.taskRepository.findById(id);

    if (!removeUser) {
      throw new AppError('Task not found', 404);
    }

    await this.taskRepository.remove(removeUser);
  }
}

export default DeleteUsersService;