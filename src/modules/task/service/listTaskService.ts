import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { ISearchParams } from '../../user/interface/IUsers';
import { ITaskRepository } from '../interface';


@injectable()
class ListUserService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
  ) {}

  async list({ page, limit }: ISearchParams) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listUsers = await this.taskRepository.findAll({
      page,
      skip,
      take,
    });
    return listUsers;
  }
  async listById(id: string) {
    const listUsers = await this.taskRepository.findById(id);

    if (!listUsers) {
      throw new AppError('User not found', 404);
    }

    return listUsers;
  }
}
export default ListUserService;