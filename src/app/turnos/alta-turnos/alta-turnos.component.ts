import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alta-turnos',
  templateUrl: './alta-turnos.component.html',
  styleUrls: ['./alta-turnos.component.css']
})
export class AltaTurnosComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      user=>{
        if(user){
          this.profesional = user[0]; //porque firebase trae como un array
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

  profesional = new Profesional();
  desde: number;
  hasta: number;
  
  guardar() {
    this.profesional.dias = this.listaDias.filter(dia=> dia.checked).map(dia => dia.nombre)
    this.profesional.horario = [this.desde, this.hasta]
    console.log(this.profesional)

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
