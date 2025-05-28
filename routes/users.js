import express from 'express'
import { addUser, allUsers, deleteUser, updateUser } from '../controllers/usersController.js'
const usersRouter = express.Router()

usersRouter.get('/',allUsers)
usersRouter.post('/',addUser)
usersRouter.put('/:id',updateUser)
usersRouter.delete('/:id',deleteUser)
export default usersRouter