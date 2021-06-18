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
  deleteUser,
} = require('./user')

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
};
