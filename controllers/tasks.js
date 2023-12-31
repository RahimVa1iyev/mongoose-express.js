


const getAllTasks = (req,res) =>{
    res.send('All Items get')
}

const createTask = (req,res) =>{
    res.json({name : req.body.name})

}

const getTask = (req,res) =>{
    
    res.json({id : req.params.id})
}

const updateTask = (req,res) =>{
    res.send('Update Task')

}

const deleteTask = (req,res) =>{
    res.send('Delete task')

}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}