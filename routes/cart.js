const { Router } = require("express");
const router = Router();
const {
    addProductInCart,
    deleteProductInCart,
    addCart
} = require('../controllers/index')

router.post('/cart', addCart)
router.post('/product/:id/cart', addProductInCart)
router.delete('/product/:id/cart', deleteProductInCart)

module.exports = router;