import { Controller, Post, Body } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './DTO/create-proyecto.dto';

@Controller('proyectos')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post('crear')
  crearProyecto(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectoService.crearProyecto(createProyectoDto);
  }
}
