const { ObjectId } = require("mongodb");
const { client } = require("../config/db");

const bookEmailIdCollection = client.db("parcelTime").collection("books");

exports.getBookEmailById = async (req, res) => {
  try {

    const id = req.params.id;

    const query = { _id: new ObjectId(id) };

    const result = await bookEmailIdCollection.findOne(query);

    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error)
    console.error('Error fetching all get email by id data!');

    res.status(500).send({
        success: false,
        message: 'Failed to fetch book email by id data!'
    })
  }
};

// app.get("/books/:email/:id", async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) };
//     const result = await bookCollection.findOne(query);
//     res.send(result);
//   });
