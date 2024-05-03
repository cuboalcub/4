import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tienda } from '../models/tienda/tienda';
import { Producto } from '../models/productos/Producto';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
myTienda = new Tienda()
myProducto = new Producto()
constructor(private LocalStorageService: LocalStorageService) { }
const miselania = this.LocalStorageService.obtenerDatos("myTienda");
console.log(miselania);
}
