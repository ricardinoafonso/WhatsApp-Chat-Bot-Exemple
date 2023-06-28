import { Router } from "express";
import controller from "./controller.js";
const routes = Router();

routes.post('/incoming',controller.index);
export default routes;
