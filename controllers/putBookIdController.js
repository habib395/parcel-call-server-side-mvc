const { client } = require("../config/db");

const bookCollection = client.db('parcelTime').collection('books');

exports.putBookIdInfo = async (req, res) => {

    try {
        
        const id = req.params.id;
        
        const filter = { _id: new ObjectId(id) };

        const options = { upsert: true};

        const updateBooks = req.body;

        const books = {

            $set: {
                name: updateBooks.name,

                email: updateBooks.email,

                phone: updateBooks.phone,

                type: updateBooks.type,

                weight: updateBooks.weight,

                rename: updateBooks.rename,

                rePhone: updateBooks.rePhone,

                delivery: updateBooks.delivery,

                latitude: updateBooks.latitude,

                longitude: updateBooks.longitude
            }
        }

        const result = await bookCollection.updateOne(filter, books, options);

        res.status(200).send({
            success: true,
            send: result,
            message: 'update book info successful.'
        })

    } catch (error) {
        console.error('Error fetching update data!');

        res.status(500).send({
            success: false,
            message: 'Internal server error!'
        })
    }
}