import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 8000;

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
