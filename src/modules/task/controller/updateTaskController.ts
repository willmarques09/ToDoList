import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateTaskService from '../service/updateTaskService';



class UpdateTaskControllers {
  async update(req: Request, res: Response) {
    const user = container.resolve(UpdateTaskService);

    const { user_id, title, description, limit_date } = req.body;
    const { id } = req.params;

    const updateTask = await user.update({
      id,
      user_id,
      title, 
      description, 
      limit_date
    });
    return res.json(instanceToInstance(updateTask));
  }
}

export default UpdateTaskControllers;