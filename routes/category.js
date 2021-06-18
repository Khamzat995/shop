const { Router } = require("express");
const router = Router();
const {
  getAllCategories,
  postCategories,
  patchCategories,
  deleteCategories,
} = require("../controllers/index");

router.get("/categories", getAllCategories);
router.post("/categories", postCategories);
router.patch("/categories/:id", patchCategories);
router.delete("/categories/:id", deleteCategories);

module.exports = router;
