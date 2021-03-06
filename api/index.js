import express from "express";
import bodyParser from "body-parser";
import router from "./routes";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 9000;

app.use(router);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to the Dog App."
  });
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
