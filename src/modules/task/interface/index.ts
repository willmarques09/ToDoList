import { NamingStrategyInterface } from "typeorm";

export interface ITask {
  id: string;
  title: string;
  description: string;
  limit_date: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdate {
  id: string;
  title: string;
  description: string;
  limit_date: string;
  user_id: string;
}

export interface ICreateTask {
  user_id: string;
  title: string;
  description: string;
  limit_date: string;
}

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ITaskRepository {
  findByTitle(title: string);
  findAll({ page, skip, take }: SearchParams);
  findByName(name: string);
  findById(id: string);
  create(task:ICreateTask);
  save(task: ITask);
  remove(task: ITask);
}
