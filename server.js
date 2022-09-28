require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

const port = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI;

// connect to db
mongoose.connect(connectionString)
  .then(() => {
    // listen for requests
    app.listen(port , () => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });
