const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: 'String', required: true, unique: true },
  password: { type: 'String', required: true },
  schedules: Array,
  email: { type: 'String', required: true },
  creationDate: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('User', userSchema);