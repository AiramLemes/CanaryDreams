import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { IslaService } from '../../app/services/islas.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit{

    islas!: Isla[];
    constructor(private islaService: IslaService) {
    }

    lista!: Isla[];

    ngOnInit(): void {
        const allIslas = this.islaService.getIslas();
        allIslas.then((value) => {
            
            value.forEach((i: Isla) => {
                console.log(i.nombre);
                console.log(i.Apellidos);
            });
            
            console.log(this.islas);
            


        })

        

        
        console.log(this.lista);
    }
    

}


type Isla = {

    imagenHome: string;
    Apellidos: string;
    nombre: string;
    
}
