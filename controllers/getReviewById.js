const { client } = require("../config/db");

const reviewCollection = client.db("parcelTime").collection("reviews");

exports.getReviewsByDeliveryManId = async (req, res) => {

  const { deliveryManId } = req.params;

  try {

    const reviews = await reviewCollection.find({ deliveryManId }).toArray();

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({
        message: "No review found for this delivery Man",
      });
    }

    res.status(200).send({
      success: true,
      send: reviews,
      message: 'Reviews found for this delivery Man!'
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};


