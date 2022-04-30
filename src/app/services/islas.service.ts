import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Injectable() 

export class IslaService {


    itemsCollection!: AngularFirestoreCollection<Isla>;
//    islas: Observable<Isla[]>;

    constructor(private db: AngularFirestore) { 
        
    }

    /*
    getItems() {
      return new Promise<any> this.db.collection('islas').snapshotChanges().subscribe((response) => {
        console.log("response", response);
      });
    }

    


    getIslas() {
      console.log('waiting until promise is resolved...');
      
        this.db.collection("prueba").valueChanges().toPromise().then(islas => {
          
          console.log('promise resolved');
          console.log(islas);
        })

        .catch(err => {
          console.log('Oh noooo!!');
          console.log(err);
        });
      
        console.log('promise is not resolved yet');
    }


*/

    getIslas() {  
        return new Promise<any>((resolve) => {
            this.db.collection("prueba")
            .valueChanges({idField: 'id'})
            .subscribe(isla =>  resolve(isla));
        })
    }

}

interface Isla {
    coordenadas?: string;
    imagen1?: string;
    imagen2?: string;
    imagen3?: string;
    imagen4?: string;
    imagen5?: string;
    imagen6?: string;
    imagenHome?: string;
    nombre?: string;
    textos?: string;
    
}
