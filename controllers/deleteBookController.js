const { ObjectId } = require("mongodb");
const { client } = require("../config/db");

const bookCollection = client.db("parcelTime").collection("books");

exports.deleteBookInfo = async (req, res) => {
  try {
    const id = req.params.id;

    const query = { _id: new ObjectId(id) };

    const result = await bookCollection.deleteOne(query);

    res.status(200).send({
      success: true,
      send: result,
      message: "Delete book item successful.",
    });
  } catch (error) {
    console.error("Fetching delete data!". error);

    res.status(500).send({
      success: false,
      message: "Internal server failed!",
    });
  }
};
