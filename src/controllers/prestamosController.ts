import { AppDataSource } from "../database/conexion";
import { Prestamos } from "../models/prestamo";
import { Request, Response } from "express";


class PrestamosController {
    private PrestamosRepository = AppDataSource.getRepository(Prestamos)

    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await this.PrestamosRepository.find(); // Usa el repositorio
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
            const newPrestamo = this.PrestamosRepository.create(req.body); // Crea la entidad
            const savedPrestamo = await this.PrestamosRepository.save(newPrestamo); // Guarda la entidad
            res.status(201).json(savedPrestamo);
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
            const data = await this.PrestamosRepository.findOneBy({ id: Number(id) }); // Usa el repositorio
            if (!data) {
                throw new Error('Prestamo no encontrada');
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
            const data = await this.PrestamosRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Prestamo no encontrada');
            }

            await this.PrestamosRepository.delete({ id: Number(id) }); // Usa el repositorio
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
            const data = await this.PrestamosRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Prestamo no encontrado');
            }

            await this.PrestamosRepository.update({ id: Number(id) }, req.body); // Usa el repositorio
            const dataActualizada = await this.PrestamosRepository.findOneBy({ id: Number(id) });
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
export default PrestamosController