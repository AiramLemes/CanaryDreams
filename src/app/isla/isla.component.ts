import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IslaService } from '../services/islas.service';

@Component({
  selector: 'app-isla',
  templateUrl: './isla.component.html',
  styleUrls: ['./isla.component.css']
})
export class IslaComponent implements OnInit {

  nombre!: any;
  constructor(private islaService: IslaService, private route: ActivatedRoute) { 

    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
    

  ngOnInit(): void {
    this.islaService.getInformacionIsla(this.nombre).then((value) => {
      console.log(value)
      console.log(value[0].textos)

        value[0].textos 
      console.log("Hoola");      
    })
  }

}
