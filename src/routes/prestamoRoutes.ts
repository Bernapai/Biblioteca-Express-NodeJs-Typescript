import express from "express";
import PrestamosController from "../controllers/prestamosController";
import { verificarToken } from "../middlewares/authMiddleware";

const router = express.Router();
const NewPrestamoController = new PrestamosController

// Ruta protegida: Consultar todos los préstamos
router.get('/prestamos', verificarToken, NewPrestamoController.consultarTodos);

// Ruta protegida: Agregar un nuevo préstamo
router.post('/prestamos', verificarToken, NewPrestamoController.agregar);

// Ruta protegida: Consultar un préstamo por ID
router.get('/prestamos/:id', verificarToken, NewPrestamoController.consultarPorId);

// Ruta protegida: Eliminar un préstamo por ID
router.delete('/prestamos/:id', verificarToken, NewPrestamoController.eliminarPorId);

// Ruta protegida: Actualizar un préstamo por ID
router.put('/prestamos/:id', verificarToken, NewPrestamoController.actualizarPorId);

export default router;