const asyncHandler = require('express-async-handler');

const getTodo = asyncHandler(async(req,res)=> {
    res.status(200).json({message: 'Get Goals'})
})

const setTodo = asyncHandler(async(req,res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a Text")
    }
    res.status(200).json({message: 'Set Goals'})
})

const updateTodo = asyncHandler(async(req,res)=> {
    res.status(200).json({message: `Update Todo ${req.params.id}`})
})

const deleteTodo = asyncHandler(async(req,res)=> {
    res.status(200).json({message: `Delete Todo ${req.params.id}`});
})


module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}