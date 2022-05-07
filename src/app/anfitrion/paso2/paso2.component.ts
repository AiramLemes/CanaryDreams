import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {

    id!: any;

    constructor(private route: ActivatedRoute, private alojamiento: AlojamientosService, private path: Router) { 
        this.id = this.route.snapshot.paramMap.get('id');
    }


    localidad = new FormGroup({
        direccion: new FormControl(''),
        cp: new FormControl(''),
        isla: new FormControl(''),
        provincia: new FormControl(''),
        ciudad: new FormControl(''),

    })

    ngOnInit(): void {

    }


    actualizarLocalidadAlojamiento() {

        var direccion = this.localidad.get("direccion")!.value
        var cp = this.localidad.get("cp")!.value
        var isla = this.localidad.get("isla")!.value
        var provincia = this.localidad.get("provincia")!.value
        var ciudad = this.localidad.get("ciudad")!.value
        

        if (direccion != "" && cp != "" && provincia != "" && isla != "" && ciudad != "" ) {
            const dir = { direccion: {direccion: direccion, 
                cp: cp, 
                isla: isla,
                provincia: provincia, 
                ciudad: ciudad}}
    
            this.alojamiento.guardarDatosAlojamiento(this.id, dir);
            this.path.navigateByUrl("anfitrion/paso3/" + this.id);
            
            
        }

        else {
            alert("Todos los campos del cuestionario tienen que estar rellenos")
        }

    }

}
