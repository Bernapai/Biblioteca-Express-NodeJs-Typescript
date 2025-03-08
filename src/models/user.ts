import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nombre: String

    @Column()
    contrasena: String

    @Column()
    edad: Number

    @Column()
    dni: Number

    @Column()
    direccion: String
}