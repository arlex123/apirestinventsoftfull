import { Component, OnInit } from '@angular/core';
import {DatosService} from './providers/datos/datos.service';

@Component({
  selector: 'app-one-list',
  templateUrl: './one-list.component.html',
  styleUrls: ['./one-list.component.css']
})
export class OneListComponent implements OnInit {

  active = 1;

  title = 'Datos Invensoft';

  public index;
  //nombreEstudiante = '';
  //public estudiantes = ['cristian t', 'cristian l p', 'cristian r', 'alexis', 'arlex'];

  public agenda: any;

  constructor(private datosService: DatosService){

    
  }

  ngOnInit(): void {
    this.getAllDatos();
  }


  getAllDatos(){
    this.datosService.getAllDatos().subscribe(
      resp => {
        console.log(resp);
        this.agenda=resp.agenda;
    });
  }

  public cambiar(i) {
    this.index = i;
    //this.nombreEstudiante = this.estudiantes[i];
  }

}
