import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  //Tarea para subir archivo
  public async tareaCloudStorage(nombreArchivo: string, datos: any) {
    return await this.storage.ref("apartamentos/" + nombreArchivo).put(datos);
  }

  //Referencia del archivo
  public async referenciaCloudStorage(nombreArchivo: string) {
    
    return await this.storage.ref("apartamentos/" + nombreArchivo);
  }
}
