const Cart = require('../models/Cart')
const Product = require('../models/Product')

const addProductInCart = async (req,res)=> {
    try {
        const cart = await Cart.findOneAndUpdate({})
        const product = await Product.findById(req.params.id)
        cart.products.push(req.params.id)
        cart.cost += product.price
        cart.quantity++
        cart.save()
        res.json('Product added in cart')
    } catch (error) {
        console.log(error.message)
    }   
}

const deleteProductInCart = async (req,res)=>{
    try {
        const cart = await Cart.findOneAndUpdate({})
        const product = await Product.findById({_id: req.params.id})
        cart.products.forEach((item, i) => {
            if(item == req.params.id){
                cart.products.splice(i,1)
            }
        });
        cart.cost -= product.price
        cart.quantity--
        cart.save()
        res.json('Success deleted')
    } catch (error) {
        console.log(error.message);
    } 
}

const addCart = async (req,res)=>{
    try {
        const cart = await new Cart({
            // userId: req.body.userId
        })
        cart.save()
        res.json('Cart created')    
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    addProductInCart,
    deleteProductInCart,
    addCart
}
