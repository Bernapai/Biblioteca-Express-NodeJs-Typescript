import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Definir el secreto JWT directamente
const SECRET_KEY = 'aD3E8z9!H3j2Ld$5hP1#qW5eR7y';  // Reemplaza con tu clave secreta real

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    // Extraer el token del encabezado
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    try {
        // Verificar el token usando el secreto definido directamente
        jwt.verify(token, SECRET_KEY);

        // Continuar al siguiente middleware o ruta
        next();
    } catch (error: unknown) {
        return res.status(401).json({ msg: 'Token inválido' });
    }
};
