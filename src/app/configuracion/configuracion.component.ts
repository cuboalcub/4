import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Tienda } from '../models/tienda/tienda';
import { Producto } from '../models/productos/Producto';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {
nombre: String = "Miselania";
ubicacion: String = "";
nombre_producto: String = "";
stock: number = 0;
precio: number = 0;
constructor(private LocalStorageService: LocalStorageService) { }
myTienda = new Tienda()
myProducto = new Producto()
callConfig(){
    this.myTienda.nombre = this.nombre;
    this.myTienda.ubicacion = this.ubicacion;
    this.LocalStorageService.guardarDatos("myTienda", this.myTienda);
    console.log(this.LocalStorageService.obtenerDatos("myTienda"));
}
getmyTienda(){
  return this.myTienda
}
GuardarProducto(){
    this.myProducto.nombre = this.nombre_producto;
    this.myProducto.stock = this.stock;
    this.myProducto.precio = this.precio;
    return this.myProducto;
}
}

