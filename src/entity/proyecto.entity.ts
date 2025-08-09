import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  idProyecto: number;
}
