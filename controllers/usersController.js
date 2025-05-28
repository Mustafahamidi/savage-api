import { users } from "../data/fakeDb.js";

//get all users
const allUsers = (req,res,next) => {
    try {

        const { name } = req.query

        if(name){
            const user = users.filter(user => user.name.toLowerCase() === name.toLowerCase())

            if(user.length === 0){
                return res.status(404).json({message:"User not found"})
            }else{
                return res.status(200).json(user)
            }

        }
            return res.status(200).json(users)
        
    } catch (error) {
        next(error)
        console.log(error)
    }
}

//add user
const addUser = (req,res,next) => {
    try {
        const {name,email} = req.body

        if(!name || !email){
            return res.status(400).json({message:"name and email are required."})
        }

        const newUser = {
            id:users.length + 1,
            name,
            email
        }

        users.push(newUser)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}

//update user
const updateUser = (req,res,next) => {
    try {
        const {id} = req.params
        const {name,email} = req.body
        const user = users.find(user => user.id === Number(id))

        if(!user){
            return res.status(404).json({message:"user not found."})
        }

        if(name) user.name = name.trim()
        if(email) user.email = email.trim()

        res.status(200).json({message:"user update successfully.",user})
    } catch (error) {
        next(error)
    }
}
//delete user
const deleteUser = (req,res,next) => {
    try {
        const {id} = req.params

        const userIndex = users.findIndex(user =>user.id === Number(id))

        if(userIndex === -1){
            return res.status(404).json({message:"user not found."})
        }

        const deleteUser = users.splice(userIndex,1)[0]
        res.status(200).json({message:"user delete successfully.",deleteUser})
    } catch (error) {
        next(error)
    }
}
export {allUsers,addUser,updateUser,deleteUser}