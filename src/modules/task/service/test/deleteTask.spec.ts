import AppError from "../../../../utils/error";
import FakeTaskRepository from "../../repositore/fakes/taskRepository";
import DeleteTaskService from "../deleteTaskService";


let fakeUsersRepository: FakeTaskRepository;
let deleteTask: DeleteTaskService;

describe('updateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeTaskRepository();
    deleteTask = new DeleteTaskService(fakeUsersRepository);
  });

  it('Should be able to remove a new task', async () => {
    await deleteTask.delete('197a07e0-c937-48a3-b8dd-1c68f994d803');

    expect(undefined);
  });

  it('Should not be able to remove twice', async () => {
    await deleteTask.delete('197a07e0-c937-48a3-b8dd-1c68f994d803');

    expect(
      deleteTask.delete('197a07e0-c937-48a3-b8dd-1c68f994d803'),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('Task not found', () => {
    const removeCustom = deleteTask.delete(
      '083a0c77-cbfa-453a-aae6-92baff12f89c',
    );

    expect(removeCustom).rejects.toBeInstanceOf(AppError);
  });
});