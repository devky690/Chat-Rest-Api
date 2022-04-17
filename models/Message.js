const mongoose = require("mongoose");

//ref wont populate immediately

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  //no array here since not referring to category name but just
  //id itself
  username: { type: String, required: true },
  //dont need this we can just inside recipe collection with model....query for a recipe id and query against the category id in the parameter seen in the url
  //to display all the recipes
  //recipes_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
