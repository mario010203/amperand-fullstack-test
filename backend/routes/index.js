const express = require("express");
const router = express.Router();
const axios = require("axios");
const _ = require("lodash");

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

/*BIRD*/

//bird - all
router.get("/bird", async (req, res, next) => {
  try {
    const birdRes = await bird.get();
    return res.json(birdRes.data);
  } catch (err) {
    console.log(err);
  }
});

//bird - batterylevel
router.get("/bird/battery", async (req, res, next) => {
  try {
    const birdRes = await bird.get();
    return res.json(_.pick(birdRes.data.birds[0], "battery_level"));
  } catch (err) {
    console.log(err);
  }
});

/*LIME*/

//lime - all
router.get("/lime", async (req, res, next) => {
  try {
    const limeRes = await lime.get();
    return res.json(limeRes.data);
  } catch (err) {
    console.log(err);
  }
});

//lime - batterylevel
router.get("/lime/battery", async (req, res, next) => {
  try {
    const limeRes = await lime.get();
    return res.json(
      _.pick(
        limeRes.data.data.attributes.vehicles[0].attributes,
        "battery_percentage"
      )
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
