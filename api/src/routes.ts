// IMPORTANDO
import { Router } from "express";
import { SurveysController } from "./controller/SurveysController";
import { UserController } from "./controller/UserController";

// DECLARAÇÃO DE CONSTANTES
const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();

// Usuários
router.post("/users", userController.create);

//Pesquisa de satisfação
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

// EXPORTANDO
export { router };
