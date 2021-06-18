const { Router } = require("express");
const router = Router();

const {
  getProduct, // экспорт функции
  getProductCategory, // экспорт функции
  getProductBrand, // экспорт функции
  postProduct, // экспорт функции
  patchProduct, // экспорт функции
  deleteProduct, // экспорт функции
} = require("../controllers/index");

router.get("/product", getProduct);
router.get("/categories/:id/product", getProductCategory);
router.get("/brand/:id/product", getProductBrand);
router.post("/product", postProduct);
router.patch("/product/:id", patchProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
