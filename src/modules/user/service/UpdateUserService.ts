import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { IUpdateUser, IUsersRepository } from '../interface/IUsers';

@injectable()
class UpdateUsesService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async update({ id, name, email, nickname }: IUpdateUser) {
    const usersExists = await this.usersRepository.findByEmail(email);
    const updateUser = await this.usersRepository.findById(id);

    if (!updateUser) {
      throw new AppError('User not found', 404);
    }

    if (usersExists && email !== updateUser.email) {
      throw new AppError('There is already one product with this email', 409);
    }

    updateUser.name = name;
    updateUser.email = email;
    updateUser.nickname = nickname;

    await this.usersRepository.save(updateUser);

    return updateUser;
  }
}

export default UpdateUsesService;
