import { Router } from 'express';
import CreateTaskControllers from '../controller/createTaskController';
import DeleteTaskControllers from '../controller/deleteTaskController';
import ListTaskControllers from '../controller/listTaskController';
import UpdateTaskControllers from '../controller/updateTaskController';


 

const createTaskController = new CreateTaskControllers();
const listTaskController = new ListTaskControllers();
const updateTaskController = new UpdateTaskControllers();
const deleteTaskController = new DeleteTaskControllers(); 

const task = Router();


task.post('/', createTaskController.create);
task.get('/:id', listTaskController.list);
task.get('/:id', listTaskController.listById);
 task.put('/:id', updateTaskController.update);
task.delete('/:id', deleteTaskController.delete); 

export default task;
