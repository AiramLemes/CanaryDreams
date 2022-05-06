import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
        this.db.collection("apartamentos").doc(id).set({tipo: tipo})
    }






}
