import e from "express";
import models from "../models";

export default class DogService {
  async getAllDogs() {
    console.log("get all dogs was called");
    const dogs = await models.Dogs.findAll();
    return dogs;
  }
  async getDog(id) {
    const dog = models.Dogs.findOne({ where: { id: id } });
    if (dog === null) {
      console.error("Unable to find dog by id ", id);
      return null;
    } else {
      console.debug("Dog found", id);
      return dog;
    }
  }
  async addDog(input) {
    const result = await models.Dogs.create({
      name: input.name,
      breed: input.breed,
      sex: input.sex,
      fixed: input.fixed,
      weight: input.weight,
      age: input.age,
      owner: input.owner,
    });

    if (result === null) {
      console.error("Failed to add dog");
      return null;
    } else {
      return result;
    }
  }
  async deleteDog(id) {
    if (id === null && id !== parseInt(id, 10)) {
      console.error("Invalid id");
      return null;
    } else {
      const result = models.Dogs.destroy({ where: { id: id } });
      console.log(result);
      return result;
    }
  }
  async updateDog(id, input) {
    const dog = await this.getDog(id);
    if (dog === null) {
      return null;
    } else {
      const result = await models.Dogs.update(
        {
          name: input.name,
          breed: input.breed,
          sex: input.sex,
          fixed: input.fixed,
          weight: input.weight,
          age: input.age,
          owner: input.owner,
        },
        { where: { id: id } }
      );
      return result;
    }
  }
}
