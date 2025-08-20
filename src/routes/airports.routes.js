import { Router } from "express";
import { readFileSync } from "fs";

export const airportRoutes = Router();

airportRoutes.get("/flights/searchAirport", (req, res) => {
  const data = readFileSync("data/airport.json", "utf-8");

  res.send(data);
});

airportRoutes.get("/flights/nearbyAirport", (req, res) => {
  const data = readFileSync("data/nearbyAirport.json", "utf-8");
  res.send(data);
});

airportRoutes.get("/flights/searchFlights", (req, res) => {
  const data = readFileSync("data/searchFlights.json", "utf-8");
  res.send(data);
});
