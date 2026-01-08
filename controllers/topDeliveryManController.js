const { client } = require("../config/db");


const topDeliveryManCollection = client.db('parcelTime').collection('parcels');
const bookCollection = client.db('parcelTime').collection('books');
const reviewCollection = client.db('parcels').collection('reviews');

exports.getTopDeliveryMan = async(req, res) => {
    try {
        const cursor = topDeliveryManCollection.find({ role: 'deliveryMan' });
        const users = await cursor.toArray();

        const deliveryStats = [];

        for(const user of users) {

            const deliveryManId = user._id.toString();

            const parcelsDelivered = await bookCollection.countDocuments({
                deliveryManId,
                status: 'Delivered'
            })


            const reviews = await reviewCollection.find({ deliveryManId }).toArray();
    
            const totalReviews = reviews.reduce(
                (acc, review) => acc + (review.rating || 0),
                0
            );
    
            const averageReview = reviews.length ? (totalReviews / reviews.length).toFixed(2) : 'No reviews';
    
            deliveryStats.push({
                name: user.name,
                phone: user.phone,
                parcelsDelivered,
                averageReview: averageReview === 'No reviews' ? 0 : parseFloat(averageReview), 
                image: user.image || 'https://via.placeholder.com/150',
                _id: user._id.toString(),
            })
        };

        const  topDeliveryMan = deliveryStats.sort((a, b) => 
            b.parcelsDelivered !== a.parcelsDelivered ?
            b.parcelsDelivered - a.parcelsDelivered : 
            b.averageReview - a.averageReview
        ).slice(0, 3);

        res.send(topDeliveryMan)

        res.status(200).send({
            success: true,
            message: 'fetch top delivery man successfully!',
            data: result
        })
    } catch (error) {
            console.error('Error fetching top delivery man');

            res.status(500).send({
                success: false,
                message: 'Failed to fetch top delivery Man.'
            })
    }
}






