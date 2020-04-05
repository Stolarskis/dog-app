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

//Add Dog
app.post("/", (req, res) => {
  //Create Dog
  models.Dogs.create({
    name: req.body.name,
    breed: req.body.breed,
    sex: req.body.sex,
    fixed: req.body.fixed,
    weight: req.body.weight,
    age: req.body.age,
    owner: req.body.owner
  }).then(dog => {
    res.status(201).send({
      message: "Dog Added",
      body: dog
    });
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

app.put("/:id", (req, res) => {
  models.Dogs.update(
    {
      name: req.body.name,
      breed: req.body.breed,
      sex: req.body.sex,
      fixed: req.body.fixed,
      weight: req.body.weight,
      age: req.body.age,
      owner: req.body.owner
    },
    { where: { id: req.params.id } }
  ).then(result => {
    if (result === 1) {
      res.status(404).send({ message: "Failed to update dog" });
    } else {
      res.status(200).send({ message: "Updated Dog" });
    }
  });
});

app.get("/:id/vaccRecord", (req, res) => {
  getVaccRecord(req.params.id).then(vaccRecord => {
    if (vaccRecord === null) {
      res.status(404).send({
        message: "Vaccination record not found",
        body: {}
      });
    } else {
      res.status(200).send({
        body: vaccRecord
      });
    }
  });
});

app.get("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Return dog's vaccination record with id " + req.params.id
  });
});

//this is absolute crap
app.post("/:id/vaccRecord", (req, res) => {
  //Check is given id exists for a dog in database
  getDog(req.params.id).then(dog => {
    if (dog === null) {
      res.status(404).send({
        message: "Unable to post Vaccination Record. Dog does not exist"
      });
    } else {
      //Wait to check if dog exists, if it does, then check if vaccination record exists.
      getVaccRecord(req.params.id).then(vaccRecord => {
        if (vaccRecord !== null) {
          res.status(404).send({
            message: "Unable to post Vaccination Record. Record already exists"
          });
          return;
        } else {
          //Wait to check if vaccination record exists, if it doesn't then post vaccination record.
          models.VaccRecord.create({
            DogId: req.params.id,
            rabiesDueDate: req.body.rabiesDueDate,
            heartwormDueDate: req.body.heartwormDueDate,
            fleaTickDueDate: req.body.fleaTickDueDate
          }).then(result => {
            res.status(200).send({
              message: "Vaccination Record Added for dog " + req.params.id,
              body: result
            });
          });
        }
      });
    }
  });
});

app.put("/:id/vaccRecord", (req, res) => {
  models.VaccRecord.update({
    DogId: req.params.id,
    rabiesDueDate: req.body.rabiesDueDate,
    heartwormDueDate: req.body.heartwormDueDate,
    fleaTickDueDate: req.body.fleaTickDueDate
  }).then(result => {
    res.status(200).send({
      message: "Updated Vaccination record for dog " + req.params.id,
      body: result
    });
  });
});

app.delete("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Deleted vaccination record for dog " + req.params.id
  });
});

function getDog(id) {
  return models.Dogs.findOne({ where: { id: id } });
}

function getVaccRecord(id) {
  return models.VaccRecord.findOne({ where: { DogId: id } });
}

module.exports = app;
