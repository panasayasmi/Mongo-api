var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var cors = require('cors');
var mongoose = require('mongoose');
var database = require('./configs/database')

global.__basedir = __dirname;

// mongoose 
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database is connected');
}, error => {
  console.log(`Cannot connect to database ${error}`);
});

dotenv.config();

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//app.use('/students', require('./routes/students'));
app.use('/menus', require('./routes/menus'));


module.exports = app;
