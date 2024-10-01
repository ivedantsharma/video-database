const mongoose = require("mongoose");

const videoMetadataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // Duration in seconds
  format: { type: String },
  size: { type: Number }, // Size in bytes
  uploadedAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cloudinaryUrl: { type: String, required: true },
});

// Create indexes
videoMetadataSchema.index({ userId: 1 });
videoMetadataSchema.index({ uploadedAt: -1 });

const VideoMetadata = mongoose.model("VideoMetadata", videoMetadataSchema);
module.exports = VideoMetadata;
