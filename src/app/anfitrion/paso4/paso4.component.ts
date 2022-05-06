import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css']
})
export class Paso4Component implements OnInit {

  id!: any;

    constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, 
        private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {


  }


  destacados = new FormGroup ({
    piscina: new FormControl(""),
    patio: new FormControl(""),
    mesaBillar: new FormControl(""),
    comedor: new FormControl(""),
    bañera: new FormControl(""),
    barbacoa: new FormControl(""),
    chimenea: new FormControl(""),
    ejercicio: new FormControl(""),
  })

  favoritos = new FormGroup ({
    wifi: new FormControl(""),
    cocina: new FormControl(""),
    parking: new FormControl(""),
    zonaTrabajo: new FormControl(""),
    tv: new FormControl(""),
    lavadora: new FormControl(""),
    ac: new FormControl(""),
    ducha: new FormControl(""),
  })

  seguridad = new FormGroup ({
    humo: new FormControl(""),
    detector: new FormControl(""),
    botiquin: new FormControl(""),
    extintor: new FormControl(""),
  })


  guardarInformacion() {

    const informacion = {
      destacados:{
        piscina: this.destacados.get("piscina")!.value, 
        patio: this.destacados.get("patio")!.value, 
        mesaBillar: this.destacados.get("mesaBillar")!.value, 
        comedor: this.destacados.get("comedor")!.value, 
        bañera: this.destacados.get("bañera")!.value,
        barbacoa: this.destacados.get("barbacoa")!.value,
        chimenea: this.destacados.get("chimenea")!.value,
        ejecicio: this.destacados.get("ejercicio")!.value, 
      },

    favoritos:{
        wifi: this.favoritos.get("wifi")!.value, 
        cocina: this.favoritos.get("cocina")!.value, 
        parking: this.favoritos.get("parking")!.value, 
        zonaTrabajo: this.favoritos.get("zonaTrabajo")!.value, 
        tv: this.favoritos.get("tv")!.value, 
        lavadora: this.favoritos.get("lavadora")!.value, 
        ac: this.favoritos.get("ac")!.value, 
        ducha: this.favoritos.get("ducha")!.value, 
      }, 

      seguridad:{
        humo: this.seguridad.get("humo")!.value, 
        detector: this.seguridad.get("detector")!.value, 
        botiquin: this.seguridad.get("botiquin")!.value, 
        extintor: this.seguridad.get("extintor")!.value, 
      }
    }
  
    this.alojamiento.actualizarLocalidadAlojamiento(this.id, informacion);

    this.path.navigateByUrl("/anfitrion/paso5"+ this.id)


  }

}
