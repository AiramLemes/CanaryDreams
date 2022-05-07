import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlojamientosService } from 'src/app/services/alojamientos.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.component.html',
  styleUrls: ['./paso5.component.css']
})
export class Paso5Component implements OnInit {

  id!: any;

    constructor(private firebaseStorage: StorageService, private route: ActivatedRoute, 
        private path: Router)  {
        this.id = this.route.snapshot.paramMap.get('id')
     }

     public archivoForm = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
    
      public datosFormulario = new FormData();
      public nombreArchivo = '';
      public URLPublica = '';
      public porcentaje = 0;
      public finalizado = false;

  ngOnInit(): void {
  }

  public async subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);
    let referencia = await this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });


    console.log(this.URLPublica)
  }

  public cambioArchivo(event: any) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      
    }
  }

  

}
