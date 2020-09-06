import { Component, OnInit } from '@angular/core';
import {DatosService} from './providers/datos/datos.service';

@Component({
  selector: 'app-three-list',
  templateUrl: './three-list.component.html',
  styleUrls: ['./three-list.component.css']
})
export class ThreeListComponent implements OnInit {

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
