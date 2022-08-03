import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTaskService from '../service/createTaskService';


class CreateTaskControllers {
  async create(req: Request, res: Response) {
    const createSessionService = container.resolve(CreateTaskService);
    const {id} = req.params;
    const { title, description, limitDate } = req.body;

    const createTask = await createSessionService.create({
      user_id: id,
      title, 
      description, 
      limitDate,
    });
    return res.status(201).json(instanceToInstance(createTask));
  }
}

export default CreateTaskControllers;





