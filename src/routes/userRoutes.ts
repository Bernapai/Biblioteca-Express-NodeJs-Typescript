import express from "express";
import userController from "../controllers/userController";
import { verificarToken } from "../middlewares/authMiddleware";


const router = express.Router();
const controller = new userController


// Ruta para registrar un usuario
router.post('/register', controller.register);

// Ruta para iniciar sesión (login) de un usuario
router.post('/login', controller.login);



export default router;