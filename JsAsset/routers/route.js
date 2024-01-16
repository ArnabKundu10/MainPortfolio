const express = require("express");
const route = new express.Router();
const Movie = require("../model/scema");
route.get("/index/:name", async (req, res) => {
  try {
    const name = req.params.name;
    console.log(name);
    const findMovie = await Movie.find({ name: name });
    res.send(findMovie);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
route.get("/index", async (req, res) => {
  try {
    const findMovie = await Movie.find({ publish_year: { $gte: 2000 } });
    res.send(findMovie);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
route.post("/index", async (req, res) => {
  try {
    const movieCollector = new Movie(req.body);
    movieCollector.save();
    console.log(movieCollector);
    res.status(201).send(movieCollector);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
route.patch("/index/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateMovie = await Movie.findByIdAndUpdate(_id, req.body, {
      new: 1,
    });
    res.status(201).send(updateMovie);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
route.delete("/index/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const deleteMovie = await Movie.findByIdAndDelete(_id);
    res.status(201).send(deleteMovie);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
module.exports = route;
