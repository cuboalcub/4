import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProvedoresService } from '../services/provedores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  arrproveedor = [];
  constructor(private ProvedoresService: ProvedoresService) { }
  ngAfterViewInit(): void {
    this.getProvedores();
  }
  private getProvedores(): void {
    this.ProvedoresService.getProvedores().subscribe((provedores:any) =>{
    this.arrproveedor = provedores
    console.log(provedores)})
  }
}
