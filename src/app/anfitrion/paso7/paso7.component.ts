import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso7',
  templateUrl: './paso7.component.html',
  styleUrls: ['./paso7.component.css']
})
export class Paso7Component implements OnInit {

    id!: any;

    constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, 
        private path: Router, private user: AuthService)  {
        this.id = this.route.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
    }

    informacion = new FormGroup ({
        precio: new FormControl(""),
        desde: new FormControl(""),
        hasta: new FormControl("")
    })

    guardarInformacion() {
        
        var precio = this.informacion.get("precio")!.value
        var desde = this.informacion.get("desde")!.value
        var hasta = this.informacion.get("hasta")!.value

        this.alojamiento.guardarReferenciaAlojamientoEnUser(this.user.getUid(), this.id)

        console.log(isNaN(parseFloat(precio)))
        

        if (this.validarFormulario(precio, desde, hasta)) {
            const informacion = {
                alquiler:{
                precio: precio, 
                desde: desde, 
                hasta: hasta, 
        
            }};
            
            this.alojamiento.guardarDatosAlojamiento(this.id, informacion);
            alert("El anuncio se ha creado correctamente")
            this.path.navigateByUrl("/cuenta/informacion");
        }
       
    }


    volverAtras() {
        this.path.navigateByUrl("/anfitrion/paso6/" + this.id);
    }



    validarFormulario(precio: string, desde: string, hasta: string): boolean {
        
        var value = true

        if (precio == "" || desde == "" || hasta == "") {
            alert("Todos los campos tienen que ser cumplimentados")
            value = false;
        }
        
        if (isNaN(parseFloat(precio))) {
            alert("El precio tiene que ser un número")
            value = false
        }

        if (this.processDate(desde) >= this.processDate(hasta)) {
            alert("La fecha desde no puede ser mayor que la fecha hasta")
            value = false
        }

        if (this.processDate(hasta) <= this.processDate(desde)) {
            alert("La fecha hasta no puede ser menor que la fecha desde")
            value = false
        }
        
        return value;
        

    }


    processDate (date: any) {
        
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
        
    }

}
