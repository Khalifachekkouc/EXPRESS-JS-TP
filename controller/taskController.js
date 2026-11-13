const Task = require('../models/taskModel');
const catchasync = require("../Utils/Catchasync")

exports.getTodos = catchasync ( async (req, res) => {
    const todos = await Task.find();
    res.status(200).json(todos);
});

exports.createTask = catchasync( async (req, res) => {
    const { title, description, isFav } = req.body;
    if (!title) return res.status(400).json("title not found");
    if (!description) return res.status(400).json("description not found");
    if (!isFav) return res.status(400).json("isFav not found");
    
    const newTask = await Task.create({title,description,isFav})
    res.status(201).json({Message:"created done",
      data:newTask
    });
});

exports.deleteTodo = catchasync(async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json("todo not found");
    res.status(200).json("deleted done");
  });

exports.updateTodo = catchasync (async (req, res) => {
    const { title, description, isFav } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, isFav },
      { new: true, runValidators: true }
    );
    if (!updatedTodo) return res.status(404).json("todo not found");
    res.status(200).json("updated done");
  });