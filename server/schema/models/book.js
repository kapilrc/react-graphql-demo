const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

// const authorSchema = new Schema({
//   name: String,
//   age: Number
// });

module.exports = mongoose.model("Book", bookSchema);
