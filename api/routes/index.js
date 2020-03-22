import dog from "./dog";
import express from "express";

const router = express.Router();

router.use("/dog", dog);

module.exports = router;
