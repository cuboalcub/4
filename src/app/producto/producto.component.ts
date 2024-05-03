import { ProductosService } from '../services/productos.service'; //import { ProductosService } '../services/productos.service.ts';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  arrProductos = [];
  constructor(private ProductosService: ProductosService) { }
  ngAfterViewInit(): void {
    this.getProductos();
  }
  private getProductos(): void {
    this.ProductosService.getProductos().subscribe((productos:any) =>{
    this.arrProductos = productos
    console.log(productos)})
  }
}
