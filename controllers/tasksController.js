import { tasks } from "../data/fakeDb.js"

const getAllTasks = (req,res,next) => {
    try {
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}
export {getAllTasks}