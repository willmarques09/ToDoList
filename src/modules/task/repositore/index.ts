/* eslint-disable import/no-extraneous-dependencies */
import { getRepository, Repository } from 'typeorm';

import TaskEntitie from '../../../infra/entities/taskEntitie';
import { ICreateTask, ITaskRepository } from '../interface';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

class TaskRepository implements ITaskRepository {     
  private ormRepository: Repository<TaskEntitie>;

  constructor() {
    this.ormRepository = getRepository(TaskEntitie);
  }
  async findByTitle(title: string) {
    const taskTitle = await this.ormRepository.findOne({
      title,
    });
    return taskTitle;
  }

  async create(task:ICreateTask) {
    const createTask = this.ormRepository.create(task);
    await this.ormRepository.save(createTask);
    return createTask;
  }

  async save(task) {
    await this.ormRepository.save(task);
    return task;
  }

  async remove(task) {
    await this.ormRepository.remove(task);
  }

  async findAll({ page, skip, take }: SearchParams) {
    const [tasks, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: tasks,
    };

    return result;
  }

  async findByName(title: string) {
    const task = await this.ormRepository.findOne({
      title,
    });
    return task;
  }

  async findById(id: string) {
    const task = await this.ormRepository.findOne({
      id,
    });
    return task;
  }
}

export { TaskRepository };
