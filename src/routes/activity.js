const express = require("express");
const activityRoutes = express.Router();
const Activity = require("../models/activity");
const auth = require("../middleware/auth");


activityRoutes.post("/activities", auth, async (req, res) => {

  try {
    const { title, description, location, date, time } = req.body;

    if (!title || !description || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newActivity = new Activity({
      title,
      description,
      location,
      date,
      time,
    });

    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (err) {
    console.error("Error creating activity:", err.message);
    res.status(500).json({ message: "Server error while creating activity." });
  }
});

activityRoutes.get("/activities", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const activities = await Activity.find()
      .skip(skip)
      .limit(limit);

    res.status(200).json(activities);
  } catch (err) {
    console.error("Error fetching activities:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = activityRoutes;