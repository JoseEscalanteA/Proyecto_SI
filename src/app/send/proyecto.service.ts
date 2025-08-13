import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:3000/proyectos/crear'; 

  constructor(private http: HttpClient) { }

  crearProyecto(proyecto: any): Observable<any> {  // evitar errores de tipado
    return this.http.post(this.apiUrl, proyecto);
  }
}