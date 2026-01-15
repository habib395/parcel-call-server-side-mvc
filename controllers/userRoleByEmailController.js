const { client } = require("../config/db");


const userCollection = client.db('parcelTime').collection('parcels');

exports.getUserRoleByEmail = async(req, res) => {
    try {
        
        const email = req.params.email;

        const result = await userCollection.findOne({ email });

        res.status(200).send({
            success: true,
            send: result,
            message: 'Get user role by email!'
        })

    } catch (error) {
        console.error('Fetching user role by email failed!');

        res.status(500).send({
            success: false,
            message: 'Internal server error!'
        })
    }
}


// app.get("/users/role/:email", async (req, res) => {
//     const email = req.params.email;
//     const result = await userCollection.findOne({ email });
//     res.send({ role: result?.role });
//   });