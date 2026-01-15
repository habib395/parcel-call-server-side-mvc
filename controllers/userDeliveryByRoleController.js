const { client } = require("../config/db");


const usersCollection = client.db('parcelTime').collection('parcels');
const booksCollection = client.db('parcelTime').collection('books');
const reviewsCollection = client.db('parcelTime').collection('reviews');


exports.getUserByRole = async(req, res) => {
    try {
        
        const role = req.params.role;

        const query = { role };

        const users = await usersCollection.find(query).toArray();

        const deliveryStats = [];

        for(const user of users){
            
            const deliveryManId = user._id.toString();

            const parcelsDelivered = await booksCollection.countDocuments({
                deliveryManId,
                status: 'Delivered'
            });

            const parcels = await booksCollection.find({ deliveryManId }).toArray();

            const reviews = await reviewsCollection.find({ deliveryManId }).toArray();

            const totalReviews = reviews.reduce(
                (acc, review) => acc + (review.rating || 0),
                0
            );

            const averageReview = reviews.length ? ( totalReviews / reviews.length).toFixed(2) : 'No reviews';         

            deliveryStats.push({
                name: user.name,
                phone: user.phone,
                parcelsDelivered,
                email: user.email,
                averageReview,
                id: user._id.toString()
            })
        };


        res.send(deliveryStats)
    } catch (error) {
        
        console.error('Error fetching deliveryMan', error);

        res.status(500).send({
            success: false,
            message: 'Internal server error!'
        })

    }
}
