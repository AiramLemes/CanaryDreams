import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {

    id!: any;

    constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, 
        private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
     }





    ngOnInit(): void {
    }


    formulario = new FormGroup ({
        huespedes: new FormControl(""),
        camas: new FormControl(""),
        baños: new FormControl(""),
        dormitorios: new FormControl(""),
    })


    guardarInformacion() {

        var huespedes= this.formulario.get("huespedes")!.value
        var camas = this.formulario.get("camas")!.value
        var baños = this.formulario.get("baños")!.value
        var dormitorios = this.formulario.get("dormitorios")!.value

    if (huespedes != "" && camas != "" && dormitorios != "" && baños != "") {
        const rooms = {huespedes: huespedes, 
        camas: camas, 
        baños: baños,
        dormitorios: dormitorios}

        this.alojamiento.actualizarLocalidadAlojamiento(this.id, rooms);
        this.path.navigateByUrl("anfitrion/paso4/" + this.id);


    }

    else  {
        alert("Todos los campos del cuestionario tienen que estar rellenos")
    }

    } 


    volverAtras() {
        this.path.navigateByUrl("./anfitrion/paso2/" + this.id)
    }


    
}
