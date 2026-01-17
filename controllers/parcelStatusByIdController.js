const { ObjectId } = require("mongodb");
const { client } = require("../config/db");

const userCollection = client.db("parcelTime").collection("parcels");

exports.patchParcelStatusByIdInfo = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status field is required!",
      });
    }

    const filter = { _id: id };

    const updateDoc = { $set: { status } };

    const result = await userCollection.updateOne(filter, updateDoc);

    res.status(200).send({
      success: true,
      data: result,
      message: "parcel status by id done!",
    });
  } catch (error) {
    console.error("fetch data for parcel status id failed!");

    res.status(500).send({
      success: false,

      message: "Internal server error!",
    });
  }
};

