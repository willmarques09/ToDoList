export interface ICreateUser {
  name: string;
  email: string;
  nickname: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  nickname: string;
  created_at: Date;
  updated_at: Date;
}

export interface IPaginateUser {
  per_page: number;
  total: number;
  current_page: number;
  data: IUser[];
}

export interface ISearchParams {
  page: number;
  limit: number;
}

export interface IUpdateUser {
  id: string;
  name: string;
  email: string;
  nickname: string;
}

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IUsersRepository {
  findAll({ page, skip, take }: SearchParams);
  findByName(name: string);
  findById(id: string);
  findByEmail(email: string);
  create(data: ICreateUser);
  save(user: IUser);
  remove(user: IUser);
}
