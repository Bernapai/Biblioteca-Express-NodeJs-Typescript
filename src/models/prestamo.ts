import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Libro from "./libro";
import { User } from "./user";


@Entity('prestamos')
export class Prestamos {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    fechaPrestamo: Date

    @ManyToOne(() => Libro)
    @JoinColumn({ name: 'libro_id' })
    libro: Libro;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'usuario_id' })
    usuario: User;



}
