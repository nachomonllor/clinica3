import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alta-turnos',
  templateUrl: './alta-turnos.component.html',
  styleUrls: ['./alta-turnos.component.css']
})
export class AltaTurnosComponent implements OnInit {


  profesional = new Profesional();
  desde: number;
  hasta: number;
  
  constructor(private auth: AuthService, private api : ApiService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      user=>{
        if(user){         
          this.profesional = user;
          if(this.profesional.horario != undefined) {
            this.desde = this.profesional.horario[0];
            this.hasta = this.profesional.horario[1];
          }
          console.log(this.profesional)
          this.listaDias.forEach(
            dia => {
              if(this.profesional.dias.includes(dia.nombre))
                dia.checked = true;
            }
          )
        }else{
          console.log(user);
        }
      }
        
    )
  }


  guardar() {
    this.profesional.dias = this.listaDias.filter(dia=> dia.checked).map(dia => dia.nombre)
    this.profesional.horario = [this.desde, this.hasta]
    console.log(this.profesional)
    this.api.modificarProfesional(this.profesional);

  }

  listaDias = [
    {checked: false, nombre: 'lunes'},
    {checked: false, nombre: 'martes'},
    {checked: false, nombre: 'miercoles'},
    {checked: false, nombre: 'jueves'},
    {checked: false, nombre: 'viernes'},
    {checked: false, nombre: 'sabado'},

  ]
}
