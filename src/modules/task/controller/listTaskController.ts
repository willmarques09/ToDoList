import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTaskService from '../service/listTaskService';

class ListTaskControllers {
  async list(req: Request, res: Response) {
    const user = container.resolve(ListTaskService);
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 15;
    const { id } = req.params;
    
    const products = await user.list({ page, limit }, id);
    return res.status(200).json(instanceToInstance(products));
  }

  async listById(req: Request, res: Response) {
    const user = container.resolve(ListTaskService);
    const { id } = req.params;

    const productById = await user.listById(id);
    return res.status(200).json(instanceToInstance(productById));
  }
}

export default ListTaskControllers;