import { id } from 'date-fns/locale';
import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { ISearchParams, IUsersRepository } from '../../user/interface/IUsers';
import { ITaskRepository } from '../interface';


@injectable()
class ListTaskService {
  constructor(
    @inject('TaskRepository')
    private taskRepository: ITaskRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async list({ page, limit }: ISearchParams, id: string) {
    const userById = await this.usersRepository.findById(id);
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listUsers = await this.taskRepository.findAll({
      page,
      skip,
      take,
    });
    const listUserTask = listUsers.data.filter((userTask)=>
      userTask.user_id === userById.id 
         )
    console.log(userById.id,'byId BUUUUUUUUUUUU');
    console.log(listUserTask, 'ListTask AAAAAAAAAAAAA');
    console.log(listUsers.data,'aaaaaaaaaaaaaaaaaaaaa listUsersssss');
    
    
    
    return listUserTask;
  }
  async listById(id: string) {
    const listUsers = await this.taskRepository.findById(id);


    if (!listUsers) {
      throw new AppError('Task not found', 404);
    }


    return listUsers;
  }
}
export default ListTaskService;