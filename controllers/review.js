const Review = require('../models/Review')

const getReviews = async (req,res)=>{
    const reviews = await Review.find({}, {text: true, productId: req.params.id})
    res.json(reviews)
}

const postReview = async (req,res)=>{
    try {
        const reviews = await new Review({
            text: req.body.text,
            userId: req.body.userId,
            productId: req.params.id
        })
        reviews.save()
        res.json('Отзыв добавлен')
    } catch (error) {
        console.log(error.message);
    }
    
}

const deleteReview = async (req,res)=>{
    try {
        const review = await Review.findById(req.params.id)
        review.delete()
        res.json('Отзыв удален')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getReviews,
    postReview,
    deleteReview
}