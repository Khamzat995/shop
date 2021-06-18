const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  availability: {
    type: Boolean,
    required: true
  },

  categoryId: {
    ref: 'Category',
    type: mongoose.Schema.Types.ObjectId
  },
  brandId: {
    ref: 'Brand',
    type: mongoose.Schema.Types.ObjectId
  },


});
module.exports = mongoose.model("Product", productSchema);
