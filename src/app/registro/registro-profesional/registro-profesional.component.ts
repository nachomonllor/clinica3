import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-profesional',
  templateUrl: './registro-profesional.component.html',
  styleUrls: ['./registro-profesional.component.css']
})
export class RegistroProfesionalComponent implements OnInit {

  constructor(private api : ApiService, private auth: AuthService ) {

   }

  ngOnInit(): void {
  }

  especialidad;
  agregarEspecialidad(){
    this.profesional.especialidades.push(this.especialidad);
    this.especialidad = "";
  } 

  eliminarEspecialidad(valor){
    this.profesional.especialidades = this.profesional.especialidades.filter( especialidad => especialidad != valor);
  }

  profesional = new Profesional();

  crearProfesional() {
    console.log(this.profesional);
    this.auth.registrarUsuario(this.profesional).then(
      () => this.api.crearProfesional(this.profesional)      
    ).then(
      function(respuesta ){
          console.log(respuesta);
      }
    ).catch(
      function(error){
        console.log(error) //TODO: Agregar mensaje de error
      }
    );

  }



}
