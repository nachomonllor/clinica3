import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/clases/turno';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-turnos-recibidos',
  templateUrl: './turnos-recibidos.component.html',
  styleUrls: ['./turnos-recibidos.component.css']
})
export class TurnosRecibidosComponent implements OnInit {

  constructor(private api: ApiService, private auth: AuthService) { }
  listaTurnos = new Array<Turno>();

  ngOnInit(): void {

    this.auth.user$.subscribe(
      user=>{
        if(user){         
           this.api.getProfesionalesTurnos(user).subscribe( resp => this.listaTurnos = (resp.map(elem => elem.payload.doc.data() as Turno)));
          
        }else{
          console.log(user);
        }
      }
        
    )
  }

}
