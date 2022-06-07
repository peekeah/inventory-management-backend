const express = require("express");
const dotenv = require("dotenv");
const router = require("./Router/Items");
const mongoose = require("mongoose");
const cors = require('cors');

const res = require("express/lib/response");

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/", router);

app.get('/', (req, res, next) => {
    res.send('Inventory Management Tool');
})

mongoose.connect(process.env.URL);

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

