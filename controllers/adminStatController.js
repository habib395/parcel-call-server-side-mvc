const { client } = require("../config/db");

const AdminStatCollection = client.db('parcelTime').collection('books');

exports.getAdminStatInfo = async(req, res) => {
    try {
        const parcelBooked = await AdminStatCollection.estimatedDocumentCount();

        const parcelDelivered = await AdminStatCollection.countDocuments({
            status: 'Delivered'
        });

        const TotalUser = await AdminStatCollection.estimatedDocumentCount();

        res.send({ parcelBooked, parcelDelivered, TotalUser });

        res.status(200).send({
            success: true,
            message: 'Admin stats received successfully!',
            data: {
                parcelBooked,
                parcelDelivered,
                TotalUser
            }
        })

    } catch (error) {
        console.error('Error fetching admin stat info:', error);
        res.status(500).send({
            success: false,
            message: 'admin stat fetch failed!!',
            error: error.message
        })
    }
}
