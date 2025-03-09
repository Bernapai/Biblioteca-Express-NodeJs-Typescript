import { AppDataSource } from "../database/conexion";
import Libro from "../models/libro";
import { Request, Response } from "express";


class LibroController {
    private libroRepository = AppDataSource.getRepository(Libro)

    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await this.libroRepository.find(); // Usa el repositorio
            res.status(200).json(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async agregar(req: Request, res: Response) {
        try {
            const newLibro = this.libroRepository.create(req.body); // Crea la entidad
            const savedLibro = await this.libroRepository.save(newLibro); // Guarda la entidad
            res.status(201).json(savedLibro);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async consultarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.libroRepository.findOneBy({ id: Number(id) }); // Usa el repositorio
            if (!data) {
                throw new Error('Libro no encontrado');
            }
            res.status(200).json(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async eliminarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.libroRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Libro no encontrado');
            }

            await this.libroRepository.delete({ id: Number(id) }); // Usa el repositorio
            res.status(204).send(); // 204 No Content
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async actualizarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.libroRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Libro no encontrado');
            }

            await this.libroRepository.update({ id: Number(id) }, req.body); // Usa el repositorio
            const dataActualizada = await this.libroRepository.findOneBy({ id: Number(id) });
            res.status(200).json(dataActualizada);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }





}
export default LibroController