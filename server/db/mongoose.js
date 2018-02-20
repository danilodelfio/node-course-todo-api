var mongoose = require('mongoose');

// this is a workaround to not insert credit card credentials into heroku
//const REMOTE_MONGO = "mongodb://root:root@ds237858.mlab.com:37858/todoapp";
const LOCAL_MONGO = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};