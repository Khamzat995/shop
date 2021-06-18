const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://shamsadov:121314qq@cluster0.8m6ff.mongodb.net/shopModelMongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
console.log("Успешное подключение к МонгоДБ");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/index'));

app.listen(3010, ()=>{
  console.log('Успешное подключение к локальному серверу')
})
