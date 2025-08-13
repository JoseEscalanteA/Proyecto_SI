import { Component } from '@angular/core';
import { ProyectoService } from '../send/proyecto.service';
import { Proyecto } from '../model/proyecto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './view.html',
  styleUrls: ['./styles.css']
})
export class App {
  private contadorId: number = 1;
   proyecto: Proyecto = {
    idProyecto: 1,
     titulo: '',
     integrantes: '',
     duracion: '',
     presupuesto: 0,
     palabrasClave: ''
   };

  constructor(private proyectoService: ProyectoService) { }

  rellenarFormulario() {
    console.log('Botón presionado. Iniciando envío de datos...');
    console.log('Datos a enviar:', this.proyecto);
      
    this.proyectoService.crearProyecto(this.proyecto).subscribe(
      response => {
        console.log('Proyecto guardado con éxito:', response);
        this.contadorId++;
        this.proyecto.idProyecto = this.contadorId;
      },
      error => {
        console.error('Error al guardar el proyecto:', error);
      }
    );

    // Reset text
    this.proyecto = {
      idProyecto: this.contadorId,
      titulo: '',
      integrantes: '',
      duracion: '',
      presupuesto: 0,
      palabrasClave: ''
    };
      console.log('Formulario reseteado con éxito.');
  }
}