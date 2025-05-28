const notFoundErrorHandler = (req,res,next) => {
    res.status(404).json({message:'Not Found 404'})
}

const globalErrorHandler = (err,req,res,next) => {
    res.status(err.status || 500).json({message:err.message || "Server Error 500"})
}

export {notFoundErrorHandler,globalErrorHandler}