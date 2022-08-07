

import TaskEntitie from '../../../../infra/entities/taskEntitie';
import { ICreateTask, ITaskRepository } from '../../interface';


class FakeTaskRepository implements ITaskRepository {
  private task: TaskEntitie[] = [
    {
      id: '197a07e0-c937-48a3-b8dd-1c68f994d804',
      title: 'b',
      description: 'b',
      limit_date: '11/11/2022',
      user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',
      created_at: new Date(),
      updated_at: new Date(),
      users:null,
    },

    {
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      title: 'a',
      description: 'b',
      limit_date: '11/11/2022',
      user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',
      created_at: new Date(),
      updated_at: new Date(),
      users:null,
    },
  ];

  public async create({user_id, title, description, limit_date }: ICreateTask) {
    const task = new TaskEntitie();

    task.user_id = user_id;
    task.title = title;
    task.description = description;
    task.limit_date = limit_date;

    this.task.push(task);

    return task;
  }

  public async save(user: TaskEntitie) {
    const findIndex = this.task.findIndex(findUser => findUser.id === user.id);

    this.task[findIndex] = user;

    return user;
  }
  findByTitle(title: string) {
    const user = this.task.find(user => user.title === title);
    return user;
  }
  public async remove(task: TaskEntitie) {}

  public async findAll() {
    return undefined;
  }

  public async findByName(name: string) {
    const user = this.task.find(user => user.title === name);
    return user;
  }

  public async findById(id: string) {
    const user = this.task.find(user => user.id === id);
    return user;
  }


}

export default FakeTaskRepository;