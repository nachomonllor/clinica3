import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }
  email: string;
  password: string;
  error: any;
  //roles: ['Administrador', 'Paciente', 'Profesional'];
  //selectedDevice: string;


  ngOnInit(): void {
    // this.form = new FormGroup( 
    //    {  "email": new FormControl( Validators.required }
    // );
    this.createForms();
  }
 
  createForms() {
    //const email = this.lsService.get('email');
    this.form = new FormGroup({
    email: new FormControl(  null, Validators.required),
    password: new FormControl(null, Validators.required),
    //remember: new FormControl(email ? true : false )
     role: new FormControl("", Validators.required)
    });
    }
 

  rolSeleccionado: string = "";

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.rolSeleccionado = event.target.value;
  }



  login(){
    
    //verificar de acuerdo el rol si coincide con el mail
    //e.preventDefault(); //evita que se recargue la pagina
    this.auth.login(this.form.get('email').value, this.form.get('password').value).then(
      
      resp => {
        //debugger
        const role =this.form.get('role').value;

        localStorage.setItem('role', role);
        //this.router.navigate(['/home'])
        if(role == "administrador") {
            this.router.navigate(['/home-admin'])
        }
        else if (role== "profesional"){ //TODO: Verificar que esté autorizado
          this.router.navigate(['/home-profesional'])
        }
        else if(role== "paciente") {
          this.router.navigate(['/home-paciente'])
        }

      }
    ).catch(
      error => {
        this.error = error;
      }
    )

  }

  // login(e){
  //   e.preventDefault(); //evita que se recargue la pagina
  //   this.auth.login(this.email, this.password).then(
  //     resp => {
  //       this.router.navigate(['/home'])
  //     }
  //   ).catch(
  //     error => {
  //       this.error = error;
  //     }
  //   )

  // }


}
