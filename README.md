# Video Metadata Database Optimization

## Overview
This project focuses on optimizing database queries for efficiently storing and retrieving large video metadata. It also implements a backup strategy to ensure real-time video processing data can be backed up without affecting performance.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js to create the API.
- **MongoDB**: NoSQL database for storing video metadata.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Node-cron**: Library for scheduling tasks to automate the backup process.
- **dotenv**: For managing environment variables.


## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ivedantsharma/video-database.git
   cd video-metadata
2. **Install Dependencies:**
   ```bash
   npm install
3. **Configure Environment Variables: Create a .env file in the root directory and add your MongoDB URI:**
   ```bash
   MONGO_URI=your_mongo_connection_string
4. Run the Application: Start the server:
   ```bash
   node server.js

## Features

# 1. Video Metadata Model
The project includes a Mongoose schema (VideoMetadata.js) for storing video metadata. Key fields include:

title: Title of the video
description: Description of the video
duration: Duration of the video in seconds
format: Format of the video file (e.g., MP4, AVI)
size: Size of the video file in MB
cloudinaryUrl: URL where the video is stored (if using Cloudinary for storage)

# 2. Optimized Database Queries
The API includes optimized queries for:

Storing Video Metadata: Using appropriate indexing on frequently queried fields to improve insert and query performance.
Retrieving Video Metadata: Efficient retrieval of metadata using queries that utilize the defined indexes.

# 3. Backup Strategy
A backup utility (backup.js) is implemented to create backups of video metadata. This utility is scheduled to run at specified intervals using node-cron, ensuring that backups do not affect real-time processing performance.

## Contribution
Feel free to fork the repository, make your changes, and submit a pull request for any improvements or new features.
