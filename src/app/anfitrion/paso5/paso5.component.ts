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

    constructor(private firebaseStorage: StorageService, private route: ActivatedRoute, private path: Router, private alojamiento: AlojamientosService)  {
        this.id = this.route.snapshot.paramMap.get('id')
    }

     public archivoForm = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
    
      public datosFormulario = new FormData();
      public nombreArchivo = '';
      public URLPublica = '';
      public finalizado = false;
      public numeroArchivosSubidos = 0;
      private enlaces:any = [];

  ngOnInit(): void {
  }

    public async subirArchivo() {
        if (this.datosFormulario.get('archivo')) {

            let archivo = this.datosFormulario.get('archivo');
            await this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo, this.id);
            this.numeroArchivosSubidos ++;
            let referencia = await this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo, this.id);
            
            await referencia.getDownloadURL().subscribe((URL) => {
                this.enlaces.push(URL);
                console.log(URL)
            });
                
            
            this.datosFormulario.delete('archivo');
            this.archivoForm.get("archivo")?.reset()
        
        }

        else {
            alert("No ha seleccionado ningún archivo.")
        }
    }

    public cambioArchivo(event: any) {
        if (event.target.files.length > 0) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.nombreArchivo = event.target.files[i].name;
                this.datosFormulario.delete('archivo');
                this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
            }
        } else {}
    }


    continuar() {

        if (this.numeroArchivosSubidos >= 1) {

            const imagenes = {imagenes:{
                imagen: this.enlaces[0],
                imagen1: this.enlaces[1],
                imagen2: this.enlaces[2],
                imagen3: this.enlaces[3],
                imagen4: this.enlaces[4],
                imagen5: this.enlaces[5],
            }}
            console.log(imagenes)
            this.alojamiento.guardarDatosAlojamiento(this.id, imagenes);    
            this.path.navigateByUrl("anfitrion/paso6/" + this.id)
        }

        else {
            alert("Ha subido " + this.numeroArchivosSubidos + " foto/s. Debe subir al menos 6 fotos para continuar.")
        }
    }

  volverAtras() {
    this.path.navigateByUrl("anfitrion/paso4/" + this.id)
  }
  

}