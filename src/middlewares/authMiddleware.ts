import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    // Extraer el token del encabezado
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    try {
        // Verificar el token usando tu secreto JWT
        jwt.verify(token, process.env.JWT_SECRET as string);

        // Continuar al siguiente middleware o ruta
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token inválido' });
    }
};
