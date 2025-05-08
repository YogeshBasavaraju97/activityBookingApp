require("dotenv").config();
const Activity = require("../models/activity");
const connectDB = require('../config/database');
const activities = [
  {
    title: "Yoga Session",
    description: "A peaceful morning yoga session for all levels.",
    location: "Central Park",
    date: "2025-06-10",
    time: "07:30",
  },
  {
    title: "Photography Walk",
    description: "Explore the city and capture beautiful moments.",
    location: "City Square",
    date: "2025-06-14",
    time: "09:00",
  },
  {
    title: "Community Cleanup",
    description: "Join us in cleaning and greening the neighborhood.",
    location: "Riverbank Park",
    date: "2025-06-15",
    time: "08:00",
  },
];


const seedActivities = async () => {
  try {
    console.log("connected");
    await connectDB();
    await Activity.insertMany(activities);
    console.log("Seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exit(1);
  }
};

seedActivities();
