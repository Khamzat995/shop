const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
  ref: 'Cart',
  type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = mongoose.model("User", userSchema);