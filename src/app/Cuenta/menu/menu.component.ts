import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router) {
        
  }


  ngOnInit(): void {
    
    let element1: any;

    switch (this.router.url) {
      
      case "/cuenta/informacion":
        element1 = document.getElementsByClassName("informacion")[0];
        element1.style.fontWeight = "bold";
        console.log(element1);
        break;

      case "/cuenta/seguridad":
        element1 = document.getElementsByClassName("seguridad")[0];
        element1.style.fontWeight = "bold";
        console.log(element1);
        break;

      case "/cuenta/misReservas":
        element1 = document.getElementsByClassName("misReservas")[0];
        element1.style.fontWeight = "bold";
        console.log(element1);
        break;

      case "/cuenta/gestionarAlojamientos":
        element1 = document.getElementsByClassName("gestionarAlojamientos")[0];
        element1.style.fontWeight = "bold";
        console.log(element1);
        break;

  }

  }

  logOut() {
    this.authService.logOut();
  }

}
