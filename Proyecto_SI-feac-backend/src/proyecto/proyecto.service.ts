import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from '../entity/proyecto.entity';
import { CreateProyectoDto } from './DTO/create-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
  ) {}

  async crearProyecto(createProyectoDto: CreateProyectoDto): Promise<Proyecto> {
    const nuevoProyecto = this.proyectoRepository.create(createProyectoDto);
    return this.proyectoRepository.save(nuevoProyecto);
  }
}
