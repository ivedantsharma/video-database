const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const VideoMetadata = require("../models/VideoMetadata");

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    resource_type: "video",
    folder: "videos",
    allowed_formats: ["mp4", "mov", "avi"],
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const videoData = {
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      format: req.file.format,
      size: req.file.size,
      cloudinaryUrl: req.file.path,
    };

    const newVideo = new VideoMetadata(videoData);
    await newVideo.save();

    res.status(201).json({ message: "Video uploaded successfully", newVideo });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error uploading video", error: error.message });
  }
});

module.exports = router;
