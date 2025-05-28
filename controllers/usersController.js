import { users } from "../data/fakeDb.js";

//get all users
const allUsers = (req,res,next) => {
    try {

        const { name } = req.query

        if(name){
            const user = users.filter(user => user.name.toLowerCase() === name.toLowerCase())

            if(user){
                return res.status(200).json(user)
            }else{
                return res.status(404).json({message:"User not found"})
            }

        }
            return res.status(200).json(users)
        
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export {allUsers}