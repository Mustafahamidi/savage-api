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

//update task
const updateTask = (req,res,next) => {
    try {
        const {id} = req.params
        const {title,completed} = req.body
        const task = tasks.find(task => task.id === Number(id))

        if(!task){
            return res.status(404).json({message:"task not found."})
        }

        if(title) task.title = title.trim()
        if(completed) task.completed = completed.trim()

        res.status(200).json({message:"task update successfully.",task})
    } catch (error) {
        next(error)
    }
}
//delete task
const deleteTask = (req,res,next) => {
    try {
        const {id} = req.params

        const taskIndex = tasks.findIndex(task =>task.id === Number(id))

        if(taskIndex === -1){
            return res.status(404).json({message:"task not found."})
        }

        const deleteTask = users.splice(taskIndex,1)[0]
        res.status(200).json({message:"user delete successfully.",deleteTask})
    } catch (error) {
        next(error)
    }
}
export {getAllTasks,addTask,updateTask,deleteTask}