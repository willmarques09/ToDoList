import 'reflect-metadata';
import AppError from '../../../../utils/error';
import FakeUsersRepository from '../../repositore/fakes/userRepository';
import ListUserService from '../listUserService';

let fakeCustomersRepository: FakeUsersRepository;
let listCustomer: ListUserService;
let page: number;
let limit: number;

describe('List Customer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeUsersRepository();

    listCustomer = new ListUserService(fakeCustomersRepository);

    page = 1;
    limit = 15;
  });

  it('Should be able to list users', async () => {
    await listCustomer.list({ page, limit });

    expect(listCustomer);
  });

  it('Should be able to list by Id', async () => {
    const data = await listCustomer.listById(
      '297a07e0-c937-48a3-b8dd-1c68f994d803',
    );

    expect(data);
  });

  it('Users not found', () => {
    const listCustom = listCustomer.listById(
      '083a0c77-cbfa-453a-aae6-92baff12f89c',
    );

    expect(listCustom).rejects.toBeInstanceOf(AppError);
  });
});