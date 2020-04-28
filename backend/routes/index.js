const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

const bird = axios.create({
  baseURL: process.env.BIRDAPI,
  withCredentials: true,
});

const lime = axios.create({
  baseURL: process.env.LIMEAPI,
  withCredentials: true,
});

router.get("/bird", async (req, res, next) => {
  try {
    const birdRes = await bird.get();
    return res.json(birdRes.data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/lime", async (req, res, next) => {
  try {
    const limeRes = await lime.get();
    return res.json(limeRes.data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
