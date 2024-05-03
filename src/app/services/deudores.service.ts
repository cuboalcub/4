import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deudor } from '../models/productos/Deudor';
@Injectable({
  providedIn: 'root'
})
export class DeudoresService {
ventas_url: string = '../assets/deudores.json';
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.getDeudores();}

  getDeudores(): Observable<Deudor> {
    return this.http.get<Deudor>(this.ventas_url)
  }

}
