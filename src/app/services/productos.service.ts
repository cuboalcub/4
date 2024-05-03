import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos_url: string = '../assets/productos/productos.json';
  constructor(private http: HttpClient) 
  { }

  ngAfterViewInit(): void {
    this.getProductos();
  }
getProductos(): Observable<Producto>
   {
    return this.http.get<Producto>(this.productos_url)
  }

  }
