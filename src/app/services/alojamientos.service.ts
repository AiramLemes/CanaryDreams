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
          this.db.collection("apartamentos")
          .valueChanges({idField: 'id'})
          .subscribe(isla =>  resolve(isla));
      })
  }
}
