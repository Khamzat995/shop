const Review = require('../models/Review')

const getReviews = async (req,res)=>{
    const reviews = await Review.find({productId: req.params.id})
    res.json(reviews)
}

const postReview = async (req,res)=>{
    try {
        const reviews = await new Review({
            text: req.body.text,
            value: req.body.value,
            userId: req.body.userId,
            productId: req.params.id
        })
        reviews.save()
        res.json('Review added')
    } catch (error) {
        console.log(error.message);
    }
    
}

const deleteReview = async (req,res)=>{
    try {
        const review = await Review.findById(req.params.id)
        review.delete()
        res.json('Success deleted')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getReviews,
    postReview,
    deleteReview
}