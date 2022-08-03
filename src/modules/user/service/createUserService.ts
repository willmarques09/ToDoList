import { inject, injectable } from 'tsyringe';

import AppError from '../../../utils/error';
import { ICreateUser, IUsersRepository } from '../interface/IUsers';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async create({ name, email, nickname }: ICreateUser) {
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError('email address already used');
    }

    const user = this.usersRepository.create({
      name,
      email,
      nickname,
    });

    return user;
  }
}

export default CreateUserService;
