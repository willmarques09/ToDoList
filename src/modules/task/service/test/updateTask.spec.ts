import 'reflect-metadata';
import AppError from '../../../../utils/error';
import FakeTaskRepository from '../../repositore/fakes/taskRepository';
import UpdateTaskService from '../updateTaskService';

let fakeTaskRepository: FakeTaskRepository;
let updateTask: UpdateTaskService;

describe('updateUser', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeTaskRepository();
    updateTask = new UpdateTaskService(fakeTaskRepository);
  });

  it('Should be able to update a task', async () => {
    const user = await updateTask.update({
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      title: 'a',
      description: 'b',
      limit_date: '11/11/2022',
      user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',
    });

    expect(user).toHaveProperty('id');
  });

  it('task not found', async () => {
    const update = updateTask.update({
      id: '9264b66d-22c5-4128-bb08-48628aaea31f',
      title: 'b',
      description: 'c',
      limit_date: '11/11/2022',
      user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',
    });

    expect(update).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update two title with the same title', async () => {
    updateTask.update({
      id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
      title: 'b',
      description: 'b',
      limit_date: '11/11/2022',
      user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',
    });

    expect(
      updateTask.update({
        id: '197a07e0-c937-48a3-b8dd-1c68f994d803',
        title: 'b',
        description: 'b',
        limit_date: '11/11/2022',
        user_id: '197a07e0-c937-48a3-b8dd-1c68f994d809',

    })).rejects.toBeInstanceOf(AppError);
  });
});