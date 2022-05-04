
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
  texto1! : string;
  texto2! : string;
  texto3! : string;
  texto4! : string;
  texto5! : string;
  imagen1!: string;
  imagen2!: string;
  imagen3!: string;
  imagen4!: string;

  constructor(private islaService: IslaService, private route: ActivatedRoute) { 

    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
    

  ngOnInit(): void {

    console.log(this.nombre)

    this.islaService.getInformacionIsla(this.nombre).then((value) => {
      console.log(this.nombre)
      this.texto1 = value[0].texto1;
      this.texto2 = value[0].texto2;
      this.texto3 = value[0].texto3;
      this.texto4 = value[0].texto3;
      this.texto4 = value[0].texto4;
      this.texto5 = value[0].texto5;

      this.imagen1 = value[0].imagen1;
      this.imagen2 = value[0].imagen2;
      this.imagen3 = value[0].imagen3;
      this.imagen4 = value[0].imagen4;


      let f = document.getElementsByClassName('isla_sec_pri') as HTMLCollectionOf<HTMLElement>;
      f[0].style.backgroundImage = "url(" + value[0].imagenFondo1 + ")";
      f = document.getElementsByClassName('isla_sec_sex') as HTMLCollectionOf<HTMLElement>;
      f[0].style.backgroundImage = "url(" + value[0].imagenFondo2 + ")";
      console.log(value[0].texto5)
      console.log(value[0].imagenFondo1);
      console.log(value[0].imagenFondo2);
      
    })
  }

}
