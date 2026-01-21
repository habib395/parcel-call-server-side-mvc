const jwt = require("jsonwebtoken");

exports.createTokenController = (req, res) => {
  try {
    const user = req.body;

    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "12h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV == "production" ? "none" : "strict",
      })
      .send({
        success: true,
        token,
      });
  } catch (error) {
    console.error("Error creating token:", error);

    res.status(500).send({
      success: false,
      message: "Server error creating token!",
    });
  }
};
