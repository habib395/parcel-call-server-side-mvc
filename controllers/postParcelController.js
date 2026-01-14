const { client } = require("../config/db");

const userController = client.db('parcelTime').collection('parcels')


exports.postParcelInfo = async(req, res) => {
    try {

        const email = req.params.email;
        
        const user = req.body;

        const query = { email };

        const isExist = await userController.findOne(query);

        if(isExist){
            return res.send(isExist);
        }

        const result = await userController.insertOne({
            ...user,
            role: 'customer',
            status: 'null',
            timestamp: Date.now()
        });

        res.send(result);
    } catch (error) {
         console.error('Fetch post parcel controller failed:', error);

         res.status(500).send({
            success: false,
            message: 'Failed to fetch post controller data!'
         })
    }
};
