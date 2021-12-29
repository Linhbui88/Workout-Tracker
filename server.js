const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/workout_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))