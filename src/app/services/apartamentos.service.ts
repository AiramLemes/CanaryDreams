import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Injectable() 

export class ApartamentosService {


    constructor(private db: AngularFirestore) { 
        
    }

    getApartamentosHome() {  
        return new Promise<any>((resolve) => {
            this.db.collection("apartamentos")
            .valueChanges({idField: 'id'})
            .subscribe(isla =>  resolve(isla));
        })
    }

}

