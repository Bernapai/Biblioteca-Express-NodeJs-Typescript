import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity('libros')
export default class Libro {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nombre: String

    @Column()
    breveDesc: String

    @Column()
    autor: String

}
