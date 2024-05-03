import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  // Guardar datos en localStorage
  guardarDatos(key: string, datos: any): void {
    localStorage.setItem(key, JSON.stringify(datos));
  }

  // Obtener datos de localStorage
  obtenerDatos(key: string): any {
    const datos = localStorage.getItem(key);
    return datos ? JSON.parse(datos) : null;
  }

  // Eliminar datos de localStorage
  eliminarDatos(key: string): void {
    localStorage.removeItem(key);
  }
}
