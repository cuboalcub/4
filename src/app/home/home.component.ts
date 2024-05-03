import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tienda } from '../models/tienda/tienda';
import { Producto } from '../models/productos/Producto';
import { LocalStorageService } from '../services/local-storage.service';
import { ProductosService } from '../services/productos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
arrProductos = [];
myTienda = new Tienda()
myProducto = new Producto()
constructor(private LocalStorageService: LocalStorageService, private ProductosService: ProductosService) { }
ngAfterViewInit(): void {
  this.getProductos();
}
private getProductos(): void {
  this.ProductosService.getProductos().subscribe((productos:any) =>{
  this.arrProductos = productos
  console.log(productos)})
}
miselania = this.LocalStorageService.obtenerDatos("myTienda")
}
