import express from "express";

let app = express.Router();

app.get("/all", (req, res) => {
  res.status(200).send({
    message: "return all dogs"
  });
});

// get a single dog by id
app.get("/:id", (req, res) => {
  res.status(200).send({
    message: "Return dog with id " + req.params.id
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
  res.status(200).send({
    message: "Dog Added",
    body: req.body
  });
});

app.post("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Vaccination Record Added for dog " + req.params.id,
    body: req.body
  });
});

app.delete("/:id", (req, res) => {
  res.status(200).send({
    message: "Deleted Dog " + req.params.id
  });
});

app.delete("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Deleted vaccination record for dog " + req.params.id
  });
});

app.put("/:id", (req, res) => {
  res.status(200).send({
    message: "Updated dog " + req.params.id,
    body: req.body
  });
});

app.put("/:id/vaccRecord", (req, res) => {
  res.status(200).send({
    message: "Updated Vaccination record for dog " + req.params.id,
    body: req.body
  });
});

module.exports = app;
