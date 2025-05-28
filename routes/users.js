import express from 'express'
import { allUsers } from '../controllers/usersController.js'
const usersRouter = express.Router()

usersRouter.get('/',allUsers)

export default usersRouter