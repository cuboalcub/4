import { Component } from '@angular/core';
import { Deudor } from '../models/productos/Deudor';
import { DeudoresService } from '../services/deudores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-deudores',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './deudores.component.html',
  styleUrl: './deudores.component.css'
})
export class DeudoresComponent {
arrDeudores = [];
myDeudor = new Deudor()
constructor(private DeudoresService: DeudoresService) { }
ngAfterViewInit(): void {
  this.getDeudores();
}
private getDeudores(): void {
  this.DeudoresService.getDeudores().subscribe((deudores:any) =>{
  this.arrDeudores = deudores
  console.log(deudores)})
}
}
