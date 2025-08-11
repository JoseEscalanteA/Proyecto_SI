import { Component } from '@angular/core';
import { ApiService } from '../send/api.service';
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
  // Contador que se resetea cada vez que se abre la aplicación
  private contadorId: number = 0;
 
  proyecto: Proyecto = {
    idProyecto: 0,
    titulo: '',
    integrantes: '',
    duracion: '',
    presupuesto: 0,
    palabrasClave: ''
  };

  constructor(private apiService: ApiService) { }

  rellenarFormulario() {
    // Incrementar contador y asignar ID
    this.contadorId++;
    this.proyecto.idProyecto = this.contadorId;
    
    console.log('Botón presionado. Iniciando envío de datos...');
    console.log('Datos a enviar:', this.proyecto);
     
    this.apiService.crearProyecto(this.proyecto).subscribe(
      response => {
        console.log('Proyecto guardado con éxito:', response);
      },
      error => {
        console.error('Error al guardar el proyecto:', error);
      }
    );

    this.proyecto = {
      idProyecto: 0,
      titulo: '',
      integrantes: '',
      duracion: '',
      presupuesto: 0,
      palabrasClave: ''
    };
    console.log('Formulario reseteado con éxito.');
  }
}