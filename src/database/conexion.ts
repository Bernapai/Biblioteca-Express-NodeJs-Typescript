import { DataSource } from "typeorm";
import { Prestamos } from "../models/prestamo";
import { User } from "../models/user";
import Libro from "../models/libro";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",  // Cambia si usas un servidor remoto
    port: 5432,  // Puerto por defecto de PostgreSQL
    username: "postgres",
    password: "Juanber123()",
    database: "biblioteca",
    logging: true,
    entities: [Prestamos, Libro, User],  // Ruta a tus entidades
    synchronize: true,  // ⚠️ Úsalo solo en desarrollo
})