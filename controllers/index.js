const {
  getAllBrands,
  postBrand,
  patchBrand,
  deleteBrand,
} = require("./brands");

const {
  getAllCategories,
  postCategories,
  patchCategories,
  deleteCategories,
} = require("./categories");

const {
  getProduct,
  getProductCategory,
  getProductBrand,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("./product");

const {
  getAllUser,
  postUser,
  patchUser,
  deleteUser
} = require("./user");

const {
  addProductInCart,
  deleteProductInCart,
  addCart
} = require("./cart");

const {
  getReviews,
  postReview,
  deleteReview
} = require("./review");

module.exports = {
  getAllCategories,
  postCategories,
  patchCategories,
  deleteCategories,
  getAllBrands,
  postBrand,
  patchBrand,
  deleteBrand,
  getProduct,
  getProductCategory,
  getProductBrand,
  postProduct,
  patchProduct,
  deleteProduct,
  getAllUser,
  postUser,
  patchUser,
  deleteUser,
  addProductInCart,
  deleteProductInCart,
  addCart,
  getReviews,
  postReview,
  deleteReview,
};
