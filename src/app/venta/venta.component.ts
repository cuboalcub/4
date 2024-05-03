import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Venta } from '../models/productos/venta';
import { VentasService } from '../services/ventas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [AppComponent,RouterLink,FormsModule,CommonModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent {

  arrVentas = [];
  myVenta = new Venta()
  constructor(private VentasService: VentasService) { }

  ngOnInit(): void {
    this.getVentas();
  }
  private getVentas(): void {
    this.VentasService.getVentas().subscribe((ventas:any) =>{
    this.arrVentas = ventas
    console.log(ventas)})
  }

}
