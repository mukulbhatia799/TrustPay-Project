// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const rootRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;
const mongodbURL = process.env.MONGODB_URL;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App started at port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("App not connected to database")
    });