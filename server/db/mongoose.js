var mongoose = require('mongoose');

// this is a workaround to not insert credit card credentials into heroku
const REMOTE_MONGO = "mongodb://root:root@ds237858.mlab.com:37858/todoapp";
const LOCAL_MONGO = "mongodb://localhost:27017/TodoApp";
const MONGODB_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

module.exports = {mongoose};