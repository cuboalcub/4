import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/productos/venta';
@Injectable({
  providedIn: 'root'
})
export class VentasService {
ventas_url: string = '../assets/ventas/ventas.json';
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.getVentas();
  }
  getVentas(): Observable<Venta> {
    return this.http.get<Venta>(this.ventas_url)
  }
}
