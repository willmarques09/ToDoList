import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../service/createUserService';
import ListUserService from '../service/listUserService';

export default class UsersController {
  public async list(req: Request, res: Response) {
    const listUser = container.resolve(ListUserService);

    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 15;

    const list = await listUser.list({ page, limit });

    return res.json(list);
  }

  public async create(req: Request, res: Response) {
    const { name, email, nickname } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.create({
      name,
      email,
      nickname,
    });

    return res.json(user);
  }
}
