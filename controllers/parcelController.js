const { client } = require("../config/db");

const parcelCollection = client.db('parcelTime').collection('parcels');

exports.getParcelInfo = async(req, res) => {
    const { status, deliveryManId, formData, toDate } = req.query;

    const query = {};

    if(status){
        query.status = status;
    }

    if(deliveryManId){
        query.deliveryManId = deliveryManId;
    }

    if(formData && toDate){
        query.approximateDeliveryDate = {
            $gte: new Date(formData).getTime(),
            $lte: new Date(toDate).getTime(),
        }
    };

    try {

        let cursor = parcelCollection.find(query);
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            message: 'parcel data fetch successfully!',
            data: result
        })

    } catch (error) {
        console.error('Error fetching all parcel data:', error)

        res.status(500).send({
            success: false,
            message: 'parcel data fetching failed!'
        })
    }
}