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
  listaTurnos = new Array();

  ngOnInit(): void {

    this.auth.user$.subscribe(
      user=>{
        if(user){         
           this.api.getProfesionalesTurnos(user).subscribe( 
             resp => {
               console.log(resp);
               this.listaTurnos = resp.map(
                 elem =>{
                   let turno = new Turno();
                   turno = elem.payload.doc.data() as Turno;
                   turno.id = elem.payload.doc.id;
                    return turno;
                 }
                 )
             }
           );
          
        }else{
          console.log(user);
        }
      }
        
    )
  }

  aceptarTurno(turno: Turno) {
    //console.log(turno)
    turno.estado = "aceptado";
    this.api.modificarTurno({... turno});
  }
  cancelarTurno(turno: Turno) {
    turno.estado = "cancelado";
    this.api.modificarTurno({... turno});

  }

  getTurnosPendientes() {
    return this.listaTurnos.filter(turno => turno.estado == "pendiente");
  }

  getTurnosNoPendientes() {
    return this.listaTurnos.filter(turno => turno.estado != "pendiente");
  }

  turnoSeleccionado;

  seleccionarTurno(turno) {
    this.turnoSeleccionado  = turno;
  }

}
