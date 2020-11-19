import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {

  usuario = new Usuario();
  repPassword ="";
  constructor(private auth : AuthService, private api: ApiService) { }

  ngOnInit(): void {
  }
  
  crearUsuario() {
    console.log(this.usuario);
    this.auth.registrarUsuario(this.usuario).then(
      () => this.api.crearUsuario(this.usuario)      
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
