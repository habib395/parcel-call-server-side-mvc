const { client } = require("../config/db");

const bookCollection = client.db('parcelTime').collection('books');

exports.postBookInfo = async(req, res) => {
    try {
        const book = req.body;

        const result = await bookCollection.insertOne({
            ...book,
            status: 'pending'
        });

        res.status(200).send({
            success: true,
            message: 'post book data successful!',
            data: result
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'fetch data for book failed!'
        })
    }
};

