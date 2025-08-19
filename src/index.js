import express from "express";
import cors from "cors";
import { airportRoutes } from "./routes/airports.routes.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "App running successfully" });
});

app.use("/api/v1", airportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running successfully on port ${PORT}`);
});
