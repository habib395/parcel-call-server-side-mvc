const { ObjectId } = require("mongodb");
const { client } = require("../config/db");

const bookCollection = client.db("parcelTime").collection("books");

exports.patchBookStatusController = async (req, res) => {

  const id = new ObjectId(req.params.id);

  const { status, deliveryManId, approximateDeliveryDate } = req.body;

  const filter = { _id: id };

  const updateDoc = {
    $set: {
      status,
      deliveryManId,
      approximateDeliveryDate: approximateDeliveryDate
        ? approximateDeliveryDate
        : new Date().toDateString(),
    },
  };

try {
    
    const result = await bookCollection.updateOne(filter, updateDoc);

    res.status(200).send({
      success: true,
      data: result,
      message: 'patch book status by id done!'
    })

} catch (error) {
    
    console.error('Failed to fetch patch data by id!');

    res.status(500).send({
        success: false,
        message: 'Internal server error!'
    })
}
};


