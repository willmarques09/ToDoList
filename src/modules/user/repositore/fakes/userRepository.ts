/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from 'uuid';

import userEntitie from '../../../../infra/entities/usersEntitie'
import { ICreateUser, IUsersRepository } from '../../interface/IUsers';

class FakeUsersRepository implements IUsersRepository {
  private users: userEntitie[] = [
    {
      id: '297a07e0-c937-48a3-b8dd-1c68f994d803',
      name: 'Willhan',
      email: 'willhan@gmail.com',
      nickname: 'willhanmar',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      name: 'Willhan',
      email: 'willhan22@gmail.com',
      nickname: 'willhanmar',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '997a07e0-c937-48a3-b8dd-1c68f994d809',
      name: 'Willhan',
      email: 'willhan1@gmail.com',
      nickname: 'willhanmar',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '117a07e0-c937-48a3-b8dd-1c68f994d801',
      name: 'Willhan',
      email: 'willhan2@gmail.com',
      nickname: 'willhanmar',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  public async create({ name, email, nickname }: ICreateUser) {
    const user = new userEntitie();

    user.id = uuidv4();
    user.name = name;
    user.email = email;
    user.nickname = nickname;

    this.users.push(user);

    return user;
  }

  public async save(user: userEntitie) {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  public async remove(user: userEntitie) {}

  public async findAll() {
    return undefined;
  }

  public async findByName(name: string) {
    const user = this.users.find(user => user.name === name);
    return user;
  }

  public async findById(id: string) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  public async findByEmail(email: string) {
    const user = this.users.find(user => user.email === email);
    return user;
  }
}

export default FakeUsersRepository;