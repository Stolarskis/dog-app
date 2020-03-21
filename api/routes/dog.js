import express from "express";
import models from "../database/models";

let app = express.Router();

app.get("/all", (req, res) => {
  models.Dogs.findAll().then(dogs => {
    res.status(200).send({
      message: "Returned all dogs",
      body: dogs
    });
  });
});

// get a single dog by id
app.get("/:id", (req, res) => {
  getDog(req.params.id).then(dog => {
    if (dog === null) {
      res.status(404).send({
        message: "Dog not found",
        body: {}
      });
    } else {
      res.status(200).send({
        body: dog
      });
    }
  });
});

// get a dog's vaccination record
app.get("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Return dog's vaccination record with id " + req.params.id
  });
});

//Add Dog
app.post("/", (req, res) => {
  //Create Dog
  models.Dogs.create({
    name: req.body.name,
    breed: req.body.breed,
    owner: req.body.owner
  }).then(dog => {
    res.status(201).send({
      message: "Dog Added",
      body: dog
    });
  });
});

app.post("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Vaccination Record Added for dog " + req.params.id,
    body: req.body
  });
});

app.delete("/:id", (req, res) => {
  models.Dogs.destroy({ where: { id: req.params.id } }).then(result => {
    if (result === 0) {
      res.status(404).send({
        message: "Dog not found"
      });
    } else {
      res.status(200).send({
        message: "Dog deleted successfully"
      });
    }
  });
});

app.delete("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Deleted vaccination record for dog " + req.params.id
  });
});

app.put("/:id", (req, res) => {
  models.Dogs.update(
    { name: req.body.name, breed: req.body.breed, owner: req.body.owner },
    { where: { id: req.params.id } }
  ).then(result => {
    if (result === 1) {
      res.status(404).send({ message: "Failed to update dog" });
    } else {
      res.status(200).send({ message: "Updated Dog" });
    }
  });
});

app.put("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Updated Vaccination record for dog " + req.params.id,
    body: req.body
  });
});

function getDog(id) {
  return models.Dogs.findOne({ where: { id: id } });
}

module.exports = app;
