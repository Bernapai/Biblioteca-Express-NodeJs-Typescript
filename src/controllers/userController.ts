import { AppDataSource } from "../database/conexion";
import { User } from "../models/user";
import { Request, Response } from "express";
import { generateToken } from "../utils/authServices";


class userController {
    private UserRepository = AppDataSource.getRepository(User)


    async register(req: Request, res: Response) {
        try {
            const newUser = this.UserRepository.create(req.body); // Crea la entidad
            const savedUser = await this.UserRepository.save(newUser); // Guarda la entidad
            res.status(201).json(savedUser);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { nombre, password } = req.body;

            // Verificar si el usuario existe
            const user = await this.UserRepository.findOneBy({ nombre, password });

            if (!user) {
                return res.status(401).json({ error: "Credenciales incorrectas" });
            }

            // Generar token
            const token = generateToken(user.id);
            res.status(200).json({ message: "Login exitoso", token });

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }

        }
    }

}
export default userController