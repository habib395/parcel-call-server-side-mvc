const { client } = require("../config/db")

const usersCollection = client.db('parcelTime').collection('parcels');

exports.getUsersInfo  = async(req, res) => {
    try {
        let cursor = usersCollection.find();
        const result = await cursor.toArray();

        res.status(200).send({
            success: true,
            data: result
        })
    } catch (error) {
        console.error('Error fetching all users info:', error);

        res.status(500).send({
            success: false,
            message: 'failed to fetch users Information.'
        })
    }
}
