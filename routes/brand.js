const { Router } = require("express");
const router = Router();
const {
  getAllBrands,
  postBrand,
  patchBrand,
  deleteBrand
} = require('../controllers/index');

router.get('/brands', getAllBrands);
router.post('/brands', postBrand);
router.patch('/brands/:id', patchBrand)
router.delete('/brands/:id', deleteBrand)

module.exports = router;