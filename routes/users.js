import express from 'express'
import { addUser, allUsers } from '../controllers/usersController.js'
const usersRouter = express.Router()

usersRouter.get('/',allUsers)
usersRouter.post('/',addUser)
export default usersRouter