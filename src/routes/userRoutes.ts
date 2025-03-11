import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
const userCtrl = new userController();

// Ruta para registrar un usuario
router.post('/register', userCtrl.register);

// Ruta para iniciar sesión
router.post('/login', userCtrl.login);

export default router;
