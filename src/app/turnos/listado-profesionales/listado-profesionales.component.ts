import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-profesionales',
  templateUrl: './listado-profesionales.component.html',
  styleUrls: ['./listado-profesionales.component.css']
})
export class ListadoProfesionalesComponent implements OnInit {

  @Output() profesionalSeleccionado = new EventEmitter<Profesional>();

  constructor(private apiService: ApiService) { 

    this.apiService.traerTodosLosProfesionales().subscribe(
      (respuesta) =>{
        //console.log(respuesta);
        //console.log(respuesta[0].payload.doc.data())

        for(let i =0; i<respuesta.length; i++) {
          this.listaProfesionales.push(respuesta[i].payload.doc.data() as Profesional);
        }
        console.log(this.listaProfesionales)

        this.listaEspecialidades = Array.from(new Set(this.listaProfesionales.map(profesional => profesional.especialidades).reduce((a, b) => a.concat(b))));
        console.log(this.listaEspecialidades);
      }
    )

  }
 
  listaProfesionales = new Array<Profesional>();
  listaEspecialidades = new Array<string>();
  seleccion
  ngOnInit(): void {

  
  }

  filtrarProfesionalesPorEspecialidad(especialidad: string) {     
    return this.listaProfesionales.filter(profesional => profesional.especialidades.includes(especialidad))
  }

  pedirTurno(profesional:Profesional) {
    console.log("Componente listado-profesional", profesional)
    this.profesionalSeleccionado.emit(profesional)
  }


  seleccionar(value){
    this.seleccion = value;
  }
}
