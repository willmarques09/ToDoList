import 'reflect-metadata';
import AppError from '../../../../utils/error';
import FakeTaskRepository from '../../repositore/fakes/taskRepository';
import ListTaskService from '../listTaskService';


let fakeTaskRepository: FakeTaskRepository;
let listTask: ListTaskService;
let page: number;
let limit: number;

describe('List Customer', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeTaskRepository();

    listTask = new ListTaskService(fakeTaskRepository);

    page = 1;
    limit = 15;
  });

  it('Should be able to list task', async () => {
    await listTask.list({ page, limit });

    expect(listTask);
  });

  it('Should be able to list by Id', async () => {
    const data = await listTask.listById(
      '197a07e0-c937-48a3-b8dd-1c68f994d803',
    );

    expect(data);
  });

  it('Task not found', () => {
    const listCustom = listTask.listById(
      '083a0c77-cbfa-453a-aae6-92baff12f89c',
    );

    expect(listCustom).rejects.toBeInstanceOf(AppError);
  });
});