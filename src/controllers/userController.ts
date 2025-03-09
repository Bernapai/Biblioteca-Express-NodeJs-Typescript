import { AppDataSource } from "../database/conexion";
import { User } from "../models/user";
import { Request, Response } from "express";


class userController {
    private UserRepository = AppDataSource.getRepository(User)




}