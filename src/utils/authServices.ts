import jwt from "jsonwebtoken";

const SECRET_KEY = 'aD3E8z9!H3j2Ld$5hP1#qW5eR7y';


export const generateToken = (userId: Number) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: "1h" });
};
