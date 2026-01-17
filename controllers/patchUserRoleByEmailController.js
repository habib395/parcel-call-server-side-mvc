const { client } = require("../config/db");

const userCollection = client.db('parcelTime').collection('parcels');

exports.patchUserRoleByEmailController = async(req, res) => {

    const email = req.params.email;

    const { role } = req.body;

    const filter = { email };

    const updateDoc = {
        $set: { role, status: 'Verified'},
    };

    try {
        
        const result = await userCollection.updateOne(filter, updateDoc);
        
        res.status(200).send({
            success: true,
            data: result,
            message: 'patch user role by email!'
        })

    } catch (error) {
        
        console.error('Error fetching updating user data!');

        res.status(500).send({
            success: false,
            message: 'Internal server error!'
        })
    }
}
