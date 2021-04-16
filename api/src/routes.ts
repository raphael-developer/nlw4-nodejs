// IMPORTANDO
import { Router } from "express";
import { SendMailController } from "./controller/SendMailController";
import { SurveysController } from "./controller/SurveysController";
import { UserController } from "./controller/UserController";

// DECLARAÇÃO DE CONSTANTES
const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

// Usuários
router.post("/users", userController.create);

//Pesquisa de satisfação
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

// EXPORTANDO
export { router };
