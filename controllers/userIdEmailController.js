const { client } = require("../config/db");

const userCollection = client.db('parcelTime').collection('parcels');

exports.getUserIdEmailInfo= async( req, res ) => {

   try {

    const email = req.params.email;

    const result = await userCollection.findOne({ email });

    res.status(200).send({
        success: true,
        send: result,
        message: 'Get user id by email!'
    })

   } catch (error) {
    console.error('Fetch data for user email failed!');

    res.status(500).send({
        success: false,
        message: 'Internal server error!'
    })
   }
}


// app.get("/user/id/:email", async (req, res) => {
//     const email = req.params.email;
//     const result = await userCollection.findOne({ email });
//     res.send({ id: result?._id });
//   });