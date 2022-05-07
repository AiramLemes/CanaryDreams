import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso7',
  templateUrl: './paso7.component.html',
  styleUrls: ['./paso7.component.css']
})
export class Paso7Component implements OnInit {

  id!: any;

  constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
  }


  guardarInformacion() {
  
  }


  volverAtras() {
    this.path.navigateByUrl("/anfitrion/paso5/" + this.id);
  }

}
