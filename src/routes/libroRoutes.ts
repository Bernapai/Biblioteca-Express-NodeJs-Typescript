import express from 'express';
import LibroController from '../controllers/librosController';
import { verificarToken } from '../middlewares/authMiddleware';

const router = express.Router();
const libroController = new LibroController();

// Ruta protegida: Consultar todos los libros
router.get('/libros', verificarToken, libroController.consultarTodos);

// Ruta protegida: Agregar un nuevo libro
router.post('/libros', verificarToken, libroController.agregar);

// Ruta protegida: Consultar un libro por ID
router.get('/libros/:id', verificarToken, libroController.consultarPorId);

// Ruta protegida: Eliminar un libro por ID
router.delete('/libros/:id', verificarToken, libroController.eliminarPorId);

// Ruta protegida: Actualizar un libro por ID
router.put('/libros/:id', verificarToken, libroController.actualizarPorId);

export default router;
