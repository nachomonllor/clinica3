import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  
  logout(e){
    e.preventDefault() //para evitar el refresh
    this.auth.logout().then(
      resp => console.log(resp)
    )
  }
}
