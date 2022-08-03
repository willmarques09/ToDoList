import { NamingStrategyInterface } from "typeorm";

export interface ITask {
  id: string;
  name: string;
  completed: string;
  task_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTask {
  user_id: string;
  title: string;
  description: string;
  limitDate: string;
}

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ITaskRepository {
  findAll({ page, skip, take }: SearchParams);
  findByName(name: string);
  findById(id: string);
  create({title, description, limitDate});
  save(task: ITask);
  remove(task: ITask);
}
