const { client } = require("../config/db");

const reviewsCollection = client.db('parcelTime').collection('reviews');

exports.getReviewsInfo = async(req, res) => {
    try {
        let cursor = reviewsCollection.find().limit(8);
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all blogs info:', error);

        res.status(500).send({
            success: false,
            message: 'Failed to fetch reviews information.'
        })
    }
}


// app.get("/reviews", async (req, res) => {
//     try {
//       const result = await reviewCollection.find().limit(8).toArray(); 
//       res.send(result)
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       res.status(500).send({ message: "Internal Server Error" });
//     }
//   });