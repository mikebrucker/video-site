const express = require("express");
const router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");
const validateInput = require("../../validation/validateInput");

const Video = require("../../models/Video");

// @route 	GET api/video
// @access 	Public
// @desc 		fetch videos
router.get("/", async (req, res) => {
  try {
    await Video.find()
      .sort({ date: -1 })
      .then(videos => res.json(videos))
      .catch(err => res.status(404).json({ success: false }));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// @route 	POST api/videos
// @desc 		Create video
// @access 	Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const video = req.body.video;
    const isMyVideoTitleValid = validateInput(video.title);
    const isMyVideoIdValid = validateInput(video.videoId);
    // Check Validation
    if (!isMyVideoTitleValid || !isMyVideoIdValid) {
      // if errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const Video = new Post({
      title: req.body.title,
      videoId: req.body.videoId
    });

    Video.save().then(video => res.json(video));
  }
);

module.exports = router;
