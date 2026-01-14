const { client } = require("../config/db");

const reviewCollection = client.db('parcelTime').collection('reviews');

exports.postReviewInfo = async(req, res) =>{
    try {
        const review = req.body;

        const result = await reviewCollection.insertOne(review);

        res.status(200).send({
            success: true,
            message: 'post data for review successful!',
            data: result
        })
    } catch (error) {
        console.error(error);

        res.status(500).send({
            success: false,
            message: 'Failed to post review data!'
        })
    }
}
