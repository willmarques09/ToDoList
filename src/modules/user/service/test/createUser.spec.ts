import 'reflect-metadata';
import AppError from '../../../../utils/error';
import FakeUsersRepository from '../../repositore/fakes/userRepository';
import CreateUserService from '../createUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.create({
     name: 'Willhan',
      email: 'willhan09@gmail.com',
      nickname: 'willhanmar',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    await createUser.create({
      name: 'Willhan',
      email: 'willhan09@gmail.com',
      nickname: 'willhanmar',
    });

    expect(
      createUser.create({
      name: 'Willhan',
      email: 'willhan09@gmail.com',
      nickname: 'willhanmar',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});