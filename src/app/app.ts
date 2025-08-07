import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Proyecto } from './model/proyecto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  proyecto: Proyecto = {
    titulo: '',
    integrantes: '',
    duracion: '',
    presupuesto: 0,
    palabrasClave: ''
  };

  constructor(private apiService: ApiService) { }

  enviarDatos() {
    // This message should appear instantly when you click the button
    console.log('Botón presionado. Iniciando envío de datos...');
    console.log('Datos a enviar:', this.proyecto);
    this.proyecto = {
      titulo: '',
      integrantes: '',
      duracion: '',
      presupuesto: 0,
      palabrasClave: ''
    };
      
    this.apiService.crearProyecto(this.proyecto).subscribe(
      response => {
        console.log('Proyecto guardado con éxito:', response);
        
        // The form will reset now.
        // This message should appear after the form is reset
        console.log('Formulario reseteado con éxito.');
      },
      error => {
        // If this message appears, the API call failed
        console.error('Error al guardar el proyecto:', error);
      }
    );
  }
}