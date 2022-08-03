import { instanceToInstance } from 'class-transformer'; // Fazer o password não aparecer no retorno
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUsesService from '../service/UpdateUserService';

class UpdateUsersControllers {
  async update(req: Request, res: Response) {
    const user = container.resolve(UpdateUsesService);

    const { name, email, nickname } = req.body;
    const { id } = req.params;

    const updateProduct = await user.update({
      id,
      name,
      email,
      nickname,
    });
    return res.json(instanceToInstance(updateProduct));
  }
}

export default UpdateUsersControllers;
