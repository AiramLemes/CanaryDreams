import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { IslaService } from '../../app/services/islas.service';
import { ApartamentosService } from '../../app/services/apartamentos.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit{

    islas!: Isla[];
    apartamentos!: Apartamento[];
    constructor(private islaService: IslaService, private apartamentosService: ApartamentosService) {
    }


    ngOnInit(): void {
        this.islaService.getIslas().then((value) => {
            this.islas = value;
        /*  value.forEach((i: Isla) => {
                console.log(i.nombre);
                console.log(i.imagenHome);
                
            });
        */

        })

        this.apartamentosService.getApartamentosHome().then((value) => {
            this.apartamentos = value;
        });


        
    }
    

}

type Apartamento = {
    imagen: string;
    nombre: string;
    localidad: string;
    precio: string;
    valoracion: string;
}


type Isla = {
    imagenHome: string;
    nombre: string;
}
