import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlojamientosService {
    

    constructor(private db: AngularFirestore) { 

    }

    getAlojamientosHome() {  
        return new Promise<any>((resolve) => {
            this.db.collection("apartamentos", ref =>
            ref.orderBy("valoracion", "desc").limit(6))
            .valueChanges({idField: 'id'})
            .subscribe(isla =>  resolve(isla));
        })
    }

    getAlojamientosIsla(isla: string) {  

    return new Promise<any>((resolve) => {
        this.db.collection("apartamentos", ref =>
            ref.where("isla", "==", isla)
            .orderBy("valoracion", "desc").limit(6))
            .valueChanges({idField: 'id'})
            .subscribe(isla =>  resolve(isla));
        })
    }


    crearAlojamiento(id: string, tipo: string) {
        this.db.collection("alojamientos").doc(id).set({tipo: tipo})
    }


    guardarDatosAlojamiento(id: string, dir: any) {
        this.db.collection("alojamientos").doc(id).update(dir);

    }

    guardarReferenciaAlojamientoEnUser (userId:string, idAlojamiento:string) {
        var ref = "alojamientos/" + idAlojamiento
    
        var r = this.db.collection("usuarios").doc(userId).update({
            alojamientos: arrayUnion(ref)
        })
    }

}
