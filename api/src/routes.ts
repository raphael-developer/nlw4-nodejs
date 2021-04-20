// IMPORTANDO
import { Router } from "express";
import { AnswerController } from "./controller/AnswerController";
import { NpsController } from "./controller/NpsController";
import { SendMailController } from "./controller/SendMailController";
import { SurveysController } from "./controller/SurveysController";
import { UserController } from "./controller/UserController";

// DECLARAÇÃO DE CONSTANTES
const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

// Usuários
router.post("/users", userController.create);

//Pesquisa de satisfação
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

// E-mail
router.post("/sendMail", sendMailController.execute);

// Resposta do usuário
router.get("/answers/:value", answerController.execute);

// NPS
router.get("/nps/:survey_id", npsController.execute);

// EXPORTANDO
export { router };
