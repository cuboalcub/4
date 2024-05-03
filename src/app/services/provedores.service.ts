import { Injectable } from '@angular/core';
import { proveedor } from '../models/tienda/proveedor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvedoresService {
provedores_url: string = '../assets/provedores/provedores.json';
constructor(private http: HttpClient) { }

ngAfterViewInit(): void {
  this.getProvedores();
}
getProvedores(): Observable<proveedor>
{
  return this.http.get<proveedor>(this.provedores_url)
}

}
