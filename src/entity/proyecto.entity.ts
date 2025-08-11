import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryColumn()
  idProyecto: number;
}
