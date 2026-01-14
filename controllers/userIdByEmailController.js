const { client } = require("../config/db");


const userCollection = client.db('parcelTime').collection('parcels');

exports.getUserIdByEmail = async(req, res) => {
    try {
        const email = req.params.email;

        const user = await userCollection.findOne({ email });

        if(!user){
            return res.status(404).send({ message: 'User not found!' });
        }

        const numericId = user._id.toString();

        res.send({ _id: numericId })

    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({
            success: false,
            message: 'Internal server error!'
        })
    }
}
