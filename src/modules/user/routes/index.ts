import { Router } from 'express';

import CreateUsersControllers from '../controller/createUserController';
import DeleteUsersControllers from '../controller/deleteUserController';
import ListUsersControllers from '../controller/listUserController';
import UpdateUsersControllers from '../controller/updateUserController';

const listUsersController = new ListUsersControllers();
const createUsersController = new CreateUsersControllers();
const updateUsersController = new UpdateUsersControllers();
const deleteUsersController = new DeleteUsersControllers();

const users = Router();

users.get('/', listUsersController.list);
users.get('/:id', listUsersController.listById);
users.post('/', createUsersController.create);
users.put('/:id', updateUsersController.update);
users.delete('/:id', deleteUsersController.delete);

export default users;
