import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTaskService from '../service/createTaskService';


class CreateTaskControllers {
  async create(req: Request, res: Response) {
    const createSessionService = container.resolve(CreateTaskService);
   
    const {user_id, title, description, limit_date } = req.body;

    const createTask = await createSessionService.create({
      user_id,
      title, 
      description, 
      limit_date,
    });
    return res.status(201).json(instanceToInstance(createTask));
  }
}

export default CreateTaskControllers;





