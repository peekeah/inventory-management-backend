const express = require("express");
const dotenv = require("dotenv");
const router = require("./Router/Items");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
dotenv.config();

app.use("/", router);

mongoose.connect(process.env.URL);

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

