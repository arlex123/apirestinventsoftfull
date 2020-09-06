import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public urlDatos = "https://invessoft.com/api/eventos/2";

  constructor(private http: HttpClient ) { }

  public getAllDatos():Observable<any>{
    return this.http.get
    
    (this.urlDatos);
  }
}