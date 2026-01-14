const { client } = require("../config/db");

const userCollection = client.db("parcelTime").collection("parcels");

const bookCollection = client.db("parcelTime").collection("books");

exports.getDeliveryByEmailInfo = async (req, res) => {
  try {
    const email = req.params.email;

    const query = { email: { $ne: email } };

    const users = await userCollection.find(query).toArray();

    const userStats = [];

    for (const user of users) {
      const userEmail = user.email;

      const userParcels = await bookCollection
        .find({ email: userEmail })
        .toArray();

      const totalSpent = userParcels.reduce(
        (acc, parcel) => acc + parcel.price,
        0
      );

      userStats.push({
        name: user.name,
        phone: user.phone,
        parcelsDelivered: userParcels.length,
        totalSpentAmount: totalSpent,
        role: user.role,
        _id: user._id.toString(),
        email: user.email,
      });
    }
    
    res.send(userStats);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};