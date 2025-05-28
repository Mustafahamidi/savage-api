import express from 'express'
import { getAllTasks } from '../controllers/tasksController.js'
const tasksRouter = express.Router()

tasksRouter.get('/',getAllTasks)
export default tasksRouter