import { tasks } from "../data/fakeDb.js"
//get all tasks
const getAllTasks = (req,res,next) => {
    try {
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

//add task
const addTask = (req,res,next) => {
    try {
        const {title,completed} = req.body

        if(!title || !completed){
            return res.status(400).json({message:"title and completed are required."})
        }
        
        const newTask = {
            id:tasks.length + 1,
            title,
            completed
        }
        tasks.push(newTask)
        res.status(201).json(newTask)
    } catch (error) {
        next(error)
    }
}
export {getAllTasks,addTask}