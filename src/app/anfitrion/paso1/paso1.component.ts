import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component implements OnInit {

    constructor(private service: AngularFirestore, private router: Router, private alojamientoService: AlojamientosService, private user: AuthService) { }

    ngOnInit(): void {
   
    }


    crearAlojamiento(tipo: string) {

        let id = this.service.createId();

        this.alojamientoService.crearAlojamiento(id, tipo);

        this.router.navigateByUrl("/anfitrion/paso2/" + id);
        

    }

  

}
