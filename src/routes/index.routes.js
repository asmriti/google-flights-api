import { Router } from "express";
import { airportRoutes } from "./airports.routes.js";
import { nearbyAirportRoutes } from "./nearbyAirports.routes.js";

const apiRoutes = Router();

apiRoutes.use("/", airportRoutes);
apiRoutes.use("/", nearbyAirportRoutes);
