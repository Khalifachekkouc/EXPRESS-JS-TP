const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.post("/CreateTask", taskController.createTask);
// router.get("/TodosList", taskController.getTodos);
// router.delete("/DeleteTodo/:id", taskController.deleteTodo);
// router.put("/UpdateTodo/:id", taskController.updateTodo);

module.exports = router;