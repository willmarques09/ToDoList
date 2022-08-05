import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteUsersService from '../service/deleteTaskService';

class DeleteTaskControllers {
  async delete(req: Request, res: Response) {
    const user = container.resolve(DeleteUsersService);
    const { id } = req.params;

    await user.delete(id);
    return res.status(200).json({ message: 'Task removed successfully' });
  }
}

export default DeleteTaskControllers;