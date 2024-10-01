const express = require("express");
const connectDB = require("./config/db");
const videoRoutes = require("./routes/videoRoutes");

require("dotenv").config();
const backupDatabase = require("./utils/backup");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
