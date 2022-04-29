import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { first } from 'rxjs';


@Injectable()

export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login (email:string, password:string) {
    try {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    return result;

    }

    catch(error) {
      console.log(error);
      return 404;
    }
    
  }



  async register (email:string, password:string ) {
      
      try {
        const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
      }

      catch(error) {
        console.log(error);
        return 404;
      }

  }

  async logOut() {
    
    try {
      await this.afAuth.signOut();
    }

    catch(error) {
      console.log(error);
      return;
    }

  }

  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise(); 
    }

    catch(error) {
      console.log(error);
      return;
    }
  }
}
