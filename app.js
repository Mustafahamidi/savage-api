import express from 'express'
import usersRouter from './routes/users.js'
import tasksRouter from './routes/tasks.js'
import { globalErrorHandler, notFoundErrorHandler } from './middleware/errorHandler.js'
import logger from './middleware/logger.js'
import timesTamp from './middleware/timestamp.js'
const app = express()
const PORT = process.env.PORT || 5000
app.use(logger)
app.use(timesTamp)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',usersRouter)
app.use('/api/tasks',tasksRouter)

// app.get('/',(req,res) => {
//     req.query
// })



app.use(notFoundErrorHandler)
app.use(globalErrorHandler)

app.listen(PORT,() => {
    console.log(`Server is runing on ${PORT}`)
})