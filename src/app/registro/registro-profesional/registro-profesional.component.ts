import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-profesional',
  templateUrl: './registro-profesional.component.html',
  styleUrls: ['./registro-profesional.component.css']
})
export class RegistroProfesionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  especialidades = new Array();
  especialidad;
  agregarEspecialidad(){
    this.especialidades.push(this.especialidad);
    this.especialidad = "";
  } 

  eliminarEspecialidad(valor){
    this.especialidades = this.especialidades.filter( especialidad => especialidad != valor)
  }

}
