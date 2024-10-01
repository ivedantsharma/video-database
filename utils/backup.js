const fs = require("fs");
const path = require("path");
const VideoMetadata = require("../models/VideoMetadata");
const cron = require("node-cron");

cron.schedule("0 * * * *", backupDatabase); // Schedule to run every hour

async function backupDatabase() {
  try {
    const data = await VideoMetadata.find({});
    const backupFilePath = path.join(__dirname, `backup-${Date.now()}.json`);
    fs.writeFileSync(backupFilePath, JSON.stringify(data));
    console.log("Backup completed:", backupFilePath);
  } catch (error) {
    console.error("Backup failed:", error);
  }
}

module.exports = backupDatabase;
