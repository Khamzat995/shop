const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chalk = require('chalk')
const boxen = require('boxen')

mongoose.connect(
  "mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/Shop?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
console.log(boxen(chalk.bold.green("Подключился к mongodb.com"), {borderColor: 'yellowBright', borderStyle: 'round'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(3100, () => {
  console.log(boxen(chalk.bold.green("Локальный сервер тоже подключен"), {borderColor: 'yellowBright', borderStyle: 'round'}));
})
