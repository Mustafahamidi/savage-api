import express from 'express'
import { addTask, getAllTasks } from '../controllers/tasksController.js'
const tasksRouter = express.Router()

tasksRouter.get('/',getAllTasks)
tasksRouter.post('/',addTask)
export default tasksRouter