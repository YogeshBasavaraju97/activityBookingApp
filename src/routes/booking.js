const express = require("express");
const bookingRoutes = express.Router();
const auth = require("../middleware/auth");
const Booking = require("../models/booking");
const Activity = require("../models/activity");

bookingRoutes.post("/bookings/:activityId", auth, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.activityId);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    const alreadyBooked = await Booking.findOne({ user: req.user._id, activity: activity._id });
    if (alreadyBooked) {
      return res.status(400).json({ message: "Activity already booked" });
    }


    const booking = new Booking({
      user: req.user._id,
      activity: activity._id,
    });

    await booking.save();
    res.status(201).json({ message: "Activity booked", booking });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
bookingRoutes.get("/my-bookings", auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("activity")
      .sort({ bookedAt: -1 });

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = bookingRoutes;