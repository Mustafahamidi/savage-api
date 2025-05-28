import express from 'express'
import { addTask, deleteTask, getAllTasks, updateTask } from '../controllers/tasksController.js'
const tasksRouter = express.Router()

tasksRouter.get('/',getAllTasks)
tasksRouter.post('/',addTask)
tasksRouter.put('/:id',updateTask)
tasksRouter.delete('/:id',deleteTask)
export default tasksRouter