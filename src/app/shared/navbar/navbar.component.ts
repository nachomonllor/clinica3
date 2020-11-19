import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router :Router ) { }

  user: any;
  logged: boolean;
  public user$: Observable<any> = this.auth.afAuth.user; //los datos de logueo
  role: string;
  ngOnInit(): void {
    // Datos de logueo
    this.user$.subscribe(
      user=> {
        if(user){
          this.user = user;
          this.role = localStorage.getItem('role');
          this.logged = true;
        } else{
          this.logged = false;
        }
      }
    )
   
  }  
  logout(e){
    e.preventDefault() //para evitar el refresh
    this.auth.logout().then(
      //resp => console.log(resp)
      resp => this.router.navigate(['/login'])
    )
  }

  registrarse() {
    this.router.navigate(['/registro']);
  }
}
