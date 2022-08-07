import 'reflect-metadata';
import AppError from '../../../../utils/error';
import FakeUsersRepository from '../../repositore/fakes/userRepository';
import UpdateUsesService from '../UpdateUserService';

let fakeUsersRepository: FakeUsersRepository;
let updateUser: UpdateUsesService;

describe('updateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUser = new UpdateUsesService(fakeUsersRepository);
  });

  it('Should be able to update a user', async () => {
    const user = await updateUser.update({
      id: '297a07e0-c937-48a3-b8dd-1c68f994d803',
      name: 'Willhan',
      email: 'willhan09@gmail.com',
      nickname: 'willhanmar',
    });

    expect(user).toHaveProperty('id');
  });

  it('User not found', async () => {
    const update = updateUser.update({
      id: '9264b66d-22c5-4128-bb08-48628aaea31f',
      name: 'Willhan Marques',
      email: 'willhan99@gmail.com',
      nickname: 'willhanmar',
    });

    expect(update).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update two user with the same email', async () => {
    const update = updateUser.update({
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      name: 'Willhan Marques',
      email: 'willhan@gmail.com',
      nickname: 'willhanmar',
    });

    expect(
      updateUser.update({
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      name: 'Willhan Marques',
      email: 'willhan@gmail.com',
      nickname: 'willhanmar',
      })).rejects.toBeInstanceOf(AppError);
  });
});