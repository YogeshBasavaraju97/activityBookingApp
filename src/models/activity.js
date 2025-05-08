const mongoose = require("mongoose");


const activitySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      required: true,
      trim: true,
    }

  }, {
  timestamps: true
});


const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;