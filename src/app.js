
require("dotenv").config();
const express = require("express");
const connectDB = require('./config/database');
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const auth = require('./routes/auth');
const activity = require('./routes/activity');
const booking = require('./routes/booking');

app.use('/', auth);
app.use('/', activity);
app.use('/', booking);

connectDB()
  .then(() => {
    console.log("connection successfully established");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log("server successfully started ");
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Error while connecting");
  });

