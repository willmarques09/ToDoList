import { container } from 'tsyringe';

import { ITaskRepository } from '../modules/task/interface';
import { TaskRepository } from '../modules/task/repositore';
import { IUsersRepository } from '../modules/user/interface/IUsers';
import { UserRepository } from '../modules/user/repositore/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UserRepository,
);
container.registerSingleton<ITaskRepository>('TaskRepository', TaskRepository);
