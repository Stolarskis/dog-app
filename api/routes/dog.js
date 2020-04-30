import express from "express";
import models from "../database/models";

let app = express.Router();

// Get all dogs
app.get("/all", async (req, res) => {
  const dogs = await models.Dogs.findAll();
  res.status(200).send({
    body: dogs,
  });
});

// Get a single dog by id
app.get("/:id", async (req, res) => {
  const dog = await getDog(req.params.id);
  if (dog === null) {
    res.status(404).send({
      message: "Dog not found",
    });
  } else {
    res.status(200).send({
      body: dog,
    });
  }
});

//Add Dog
app.post("/", async (req, res) => {
  const dog = await models.Dogs.create({
    name: req.body.name,
    breed: req.body.breed,
    sex: req.body.sex,
    fixed: req.body.fixed,
    weight: req.body.weight,
    ageYears: req.body.ageYears,
    owner: req.body.owner,
  });
  res.status(201).send({
    message: "Dog Added",
    body: dog,
  });
});

app.delete("/:id", async (req, res) => {
  const result = await models.Dogs.destroy({ where: { id: req.params.id } });
  if (result === 0) {
    res.status(404).send({
      message: "Dog not found",
    });
  } else {
    res.status(200).send({
      message: "Dog deleted successfully",
    });
  }
});

app.put("/:id", async (req, res) => {
  const dog = await getDog(req.params.id);
  if (dog === null) {
    res.status(404).send({ message: "Dog does not exist" });
    return;
  }
  const result = await models.Dogs.update(
    {
      name: req.body.name,
      breed: req.body.breed,
      sex: req.body.sex,
      fixed: req.body.fixed,
      weight: req.body.weight,
      ageYears: req.body.ageYears,
      owner: req.body.owner,
    },
    { where: { id: req.params.id } }
  );
  if (result === 1) {
    res.status(503).send({ message: "Failed to update dog" });
  } else {
    res.status(200).send({ message: "Updated Dog" });
  }
});

app.get("/:id/vaccRecord", async (req, res) => {
  const vaccRecord = await getVaccRecord(req.params.id);
  if (vaccRecord === null) {
    res.status(404).send({
      message: "Vaccination record not found",
    });
  } else {
    res.status(200).send({
      body: vaccRecord,
    });
  }
});

app.get("/:id/vaccRecord", async (req, res) => {
  const dog = await getDog(req.params.id);
  if (dog === null) {
    res.status(404).send({
      message: "Unable to post Vaccination Record. Dog does not exist",
    });
  } else {
    res.status(200).send({
      body: dog,
    });
  }
});

app.post("/:id/vaccRecord", async (req, res) => {
  //Check is given id exists for a dog in database
  const dog = await getDog(req.params.id);
  if (dog === null) {
    res.status(404).send({
      message: "Unable to post Vaccination Record. Dog does not exist",
    });
    return;
  }
  let vaccRecord = await getVaccRecord(req.params.id);
  if (vaccRecord !== null) {
    res.status(400).send({
      message: "Unable to post Vaccination Record. Record already exists",
    });
    return;
  }
  await models.VaccRecord.create({
    DogId: req.params.id,
    dhppDappDueDate: req.body.dhppDappDueDate || null,
    rabiesDueDate: req.body.rabiesDueDate || null,
    bordetellaDueDate: req.body.bordetellaDueDate || null,
  });

  res.status(200).send({
    message: "Vaccination Record Added for dog " + req.params.id,
  });
});

app.put("/:id/vaccRecord", async (req, res) => {
  const dog = await getDog(req.params.id);
  if (dog === null) {
    res.status(404).send({
      message: "Unable to update Vaccination Record. Dog does not exist",
    });
    return;
  }
  let vaccRecord = await getVaccRecord(req.params.id);
  if (vaccRecord === null) {
    res.status(400).send({
      message: "Unable to update Vaccination Record. Record doesn't exist",
    });
    return;
  }
  const vaccRecordUpdate = await models.VaccRecord.update(
    {
      DogId: req.params.id,
      dhppDappDueDate: req.body.dhppDappDueDate || null,
      rabiesDueDate: req.body.rabiesDueDate || null,
      bordetellaDueDate: req.body.bordetellaDueDate || null,
    },
    { where: { DogId: req.params.id } }
  );

  res.status(200).send({
    message: "Updated Vaccination Record for dog " + req.params.id,
  });
});

function getDog(id) {
  return models.Dogs.findOne({ where: { id: id } });
}

function getVaccRecord(id) {
  return models.VaccRecord.findOne({ where: { DogId: id } });
}

module.exports = app;
