import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlojamientosService } from 'src/app/services/alojamientos.service';
import { StorageService } from 'src/app/services/storage.service';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-mis-alojamientos',
  templateUrl: './mis-alojamientos.component.html',
  styleUrls: ['./mis-alojamientos.component.css']
})
export class MisAlojamientosComponent implements OnInit {

    constructor(private alojamientos: AlojamientosService, private path: Router, private user: AuthService, private almacenamiento: StorageService) { }

    misAlojamientos: Alojamiento[] = []
    a: Alojamiento[] = []

    async ngOnInit(): Promise<any> {

        this.misAlojamientos = await this.alojamientos.getMisAlojamientos(this.user.getUid());
    }

    eliminar(id: string) {
        console.log(id)
        let confirmacion = confirm("¿Está seguro de que quiere eliminar su alojamiento?");

        if (confirmacion) {

            if (confirmacion) {
                this.alojamientos.eliminarAlojamiento(id, this.user.getUid())
                this.almacenamiento.eliminarAlojamiento(id);
                alert("Su alojamiento ha sido eliminado correctamente");
                this.path.navigateByUrl("")
            }

            else {
                alert("Se ha producido un error, vuelva a intentarlo")
            }
            

        }

    

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
