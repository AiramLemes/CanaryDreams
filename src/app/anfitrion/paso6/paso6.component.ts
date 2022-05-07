import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.component.html',
  styleUrls: ['./paso6.component.css']
})
export class Paso6Component implements OnInit {

  
  id!: any;

  constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {
  }

  informacion = new FormGroup ({
    titulo: new FormControl(""),
    descripcion: new FormControl(""),
  })

  aspectosDestacados = new FormGroup ({
    tranquilo: new FormControl(""),
    unico: new FormControl(""),
    familiar: new FormControl(""),
    espacioso: new FormControl(""),
    centrico: new FormControl(""),
  })



  guardarInformacion() {

    const informacion = {
      destacados:{
        titulo: this.informacion.get("titulo")!.value, 
        descripcion: this.informacion.get("descripcion")!.value, 
       
      },

      aspectosDestacados:{
        tranquilo: this.aspectosDestacados.get("tranquilo")!.value, 
        unico: this.aspectosDestacados.get("unico")!.value, 
        familiar: this.aspectosDestacados.get("familiar")!.value, 
        espacioso: this.aspectosDestacados.get("espacioso")!.value, 
        centrico: this.aspectosDestacados.get("centrico")!.value, 
      }, 

    }
  
    this.alojamiento.guardarDatosAlojamiento(this.id, informacion);

    this.path.navigateByUrl("/anfitrion/paso7"+ this.id)

  }


  volverAtras() {
    this.path.navigateByUrl("/anfitrion/paso5" + this.id);
  }

  

}
