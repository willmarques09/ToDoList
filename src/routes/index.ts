import { Router } from 'express';

import usersRouter from '../modules/user/routes';
import taskRouter from '../modules/task/routes';
const routes = Router();

routes.get('/', (req, res) => {
  res.json(
    'Hello Dev!! Welcome To Do List API by Willhan Marques, please use routes BASE_URL/todo-doc',
  );
});

routes.use('/users', usersRouter);
routes.use('/task', taskRouter);

export default routes;
