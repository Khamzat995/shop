const { Router } = require("express");
const router = Router();
const {
    getReviews,
    postReview,
    deleteReview
} = require('../controllers/index')

router.get('/product/:id/review', getReviews)
router.post('/product/:id/review', postReview)
router.delete('/review/:id', deleteReview)

module.exports = router;