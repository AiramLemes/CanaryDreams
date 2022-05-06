import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';

@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.component.html',
  styleUrls: ['./paso5.component.css']
})
export class Paso5Component implements OnInit {

  id!: any;

    constructor(private alojamiento: AlojamientosService, private route: ActivatedRoute, 
        private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
     }

  ngOnInit(): void {
  }

}
