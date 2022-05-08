import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-mis-alojamientos',
  templateUrl: './mis-alojamientos.component.html',
  styleUrls: ['./mis-alojamientos.component.css']
})
export class MisAlojamientosComponent implements OnInit {

    constructor(private alojamientos: AlojamientosService, private path: Router, private user: AuthService) { }

    misAlojamientos: Alojamiento[] = []

    async ngOnInit(): Promise<any> {

        this.misAlojamientos = this.alojamientos.getMisAlojamientos(this.user.getUid());
        console.log(this.misAlojamientos[1])
    }


}

type Alojamiento = {
    imagenes:{imagen: string},

    informacionGeneral: {
        titulo: string
    },

    id: string,

    alquiler: {
        precio: string
    },

    direccion: {
        ciudad: string, 
        isla: string
    }
}
