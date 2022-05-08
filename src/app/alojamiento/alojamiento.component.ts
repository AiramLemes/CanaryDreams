import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from '../services/alojamientos.service';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html',
  styleUrls: ['./alojamiento.component.css']
})
export class AlojamientoComponent implements OnInit {

  id!: any;

  constructor(private route: ActivatedRoute, private alojamiento: AlojamientosService, private path: Router) { 
      this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
