const { client } = require("../config/db");

const bookCollection = client.db('parcelTime').collection('books');

exports.getBooksInfo = async(req, res) => {
    try {
        let cursor = bookCollection.find();
        const result = cursor.toArray();
        
        res.status(200).send({
            success: true,
            message: 'Book Collection data fetch successfully!',
            data: result
        })
    } catch (error) {
        console.error('Error fetching all books info:', error);
        res.status(500).send({
            success: false,
            message: 'Failed to fetch books information!',
        })
    }
}