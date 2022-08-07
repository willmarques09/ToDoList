import AppError from "../../../../utils/error";
import FakeTaskRepository from "../../repositore/fakes/taskRepository";
import CreateTaskService from "../createTaskService";


let fakeTaskRepository: FakeTaskRepository;
let createTask: CreateTaskService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeTaskRepository = new FakeTaskRepository();
    createTask = new CreateTaskService(fakeTaskRepository);
  });

  it('should be able to create a new task', async () => {
    const user = await createTask.create({
    user_id: '11',
    title: 'atividade 1',
    description: 'validar os requisito',
    limit_date: '11/08/22',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two title with the same title', async () => {
    await createTask.create({
      user_id: '11',
      title: 'atividade 2',
      description: 'validar os requisito',
      limit_date: '11/08/22',
    });

    expect(
      createTask.create({
        user_id: '11',
        title: 'atividade 2',
        description: 'validar os requisito',
        limit_date: '11/08/22',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});