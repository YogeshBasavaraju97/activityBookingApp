const mongoose = require('mongoose');

const connectDb = async () => {

  try {

    await mongoose.connect(
      process.env.MONGODB_URL,
    );
    console.log("BD connected");

  } catch (err) {
    console.error("Seeding failed:", err.message);
    throw err;

  }
};

module.exports = connectDb;
