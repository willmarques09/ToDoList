import { Router } from 'express';
import CreateTaskControllers from '../controller/createTaskController';


/* import DeleteUsersControllers from '../controller/deleteUserController';
import ListUsersControllers from '../controller/listUserController';
import UpdateUsersControllers from '../controller/updateUserController';
 */

const createTaskController = new CreateTaskControllers();
/* const listUsersController = new ListUsersControllers();
const updateUsersController = new UpdateUsersControllers();
const deleteUsersController = new DeleteUsersControllers(); */

const task = Router();


task.post('/', createTaskController.create);
/* task.get('/', listUsersController.list);
task.get('/:id', listUsersController.listById);
task.put('/:id', updateUsersController.update);
task.delete('/:id', deleteUsersController.delete); */

export default task;
