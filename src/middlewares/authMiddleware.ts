import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET_KEY = 'aD3E8z9!H3j2Ld$5hP1#qW5eR7y';

export const verificarToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('x-auth-token');
    if (!token) {
        res.status(401).json({ msg: 'Acceso no autorizado' });
        return;
    }

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) return res.status(401).json({ msg: 'Token inválido' });
        next();
    });
};