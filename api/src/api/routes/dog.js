import express from "express";
import models from "../../models";
import DogService from "../../services/DogService";

let route = express.Router();
let dogService = new DogService();

// Get all dogs
route.get("/all", async (_, res) => {
  const dogs = await dogService.getAllDogs();
  res.status(200).send({
    body: dogs,
  });
});

// Get a single dog by id
route.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (id !== undefined || id !== parseInt(id, 10)) {
    console.error("Invalid Param");
    res.status(400).send({ message: "Invalid id given for dog" });
  } else {
    const dog = await dogService.getDog(req.params.id);
    if (dog === null) {
      res.status(404).send({
        message: "Dog not found",
      });
    } else {
      res.status(200).send({
        body: dog,
      });
    }
  }
});

//Add Dog
route.post("/", async (req, res) => {
  if (req.body.name == undefined || req.body.owner == undefined) {
    console.error("Invalid request. Missing required fields, name/owner");
    res.status(400).send({ message: "Missing name or owner fields" });
  } else {
    const inputDog = {
      name: req.body.name,
      breed: req.body.breed,
      sex: req.body.sex,
      fixed: req.body.fixed,
      weight: req.body.weight,
      age: req.body.age,
      owner: req.body.owner,
    };

    const dog = await dogService.addDog(inputDog);
    if (dog === null) {
      res.status(500).send({
        message: "Failed to add dog to database",
      });
    } else {
      res.status(201).send({
        message: "Dog Added Successfully",
        body: dog,
      });
    }
  }
});

route.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (id === null && id !== parseInt(id, 10)) {
    console.error("Invalid id");
    res.status(400).send({
      message: "Invalid Id",
    });
  } else {
    const result = await dogService.deleteDog(req.params.id);
    console.log(result);
    if (result === 0) {
      res.status(404).send({
        message: "Dog not found",
      });
    } else {
      res.status(200).send({
        message: "Dog deleted successfully",
      });
    }
  }
});

route.put("/:id", async (req, res) => {
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
      age: req.body.age,
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

route.get("/:id/vaccRecord", async (req, res) => {
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

route.get("/:id/vaccRecord", async (req, res) => {
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

route.post("/:id/vaccRecord", async (req, res) => {
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

route.put("/:id/vaccRecord", async (req, res) => {
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

module.exports = route;
