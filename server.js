const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require('express');
const mongoose = require("mongoose");
const taskRout = require('./routes/taskRout');
const db = require("./DataBase/Db");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1/tasks", taskRout);

mongoose.connect(db)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.listen(port, () => {
    console.log(`server runs in ${port}`)});