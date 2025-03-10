import jwt from "jsonwebtoken";

const SECRET_KEY = "tu_clave_secreta"; // ⚠️ Mejor usa variables de entorno

export const generateToken = (userId: Number) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1h" });
};
