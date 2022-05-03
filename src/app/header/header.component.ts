import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    anfitrionButton!: any;

    constructor(private authService: AuthService, private router: Router) {
        
    }

    ngOnInit(): void {
        this.anfitrionButton = document.getElementsByClassName('anfitrion')[0];
        this.mostrarAnfitrion();
    }

    
    redireccionar(componente: string) {
        // Si el nombre de la ruta no existe se genera un error.
        if (this.authService.currentUser()) {
            this.router.navigateByUrl("/"+ componente);
        }

        else {
            alert("Primero debes iniciar sesión")
            this.router.navigateByUrl('/login');
        }

    }

    mostrarAnfitrion() { // Persfecto niño
        this.authService.afAuth.onAuthStateChanged((user) => {
			if (user) {
				this.anfitrionButton.style.display = "";
			} else {
                this.anfitrionButton.style.display = "none";
			}
		  });
    }
    

    logOut() {

        this.authService.logOut();
        this.mostrarAnfitrion
        
    }
    

}
