const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is required"] ,maxlength:200},
    description: { type: String},
    isFav: { type: Boolean}
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;