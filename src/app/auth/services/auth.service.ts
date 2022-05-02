import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import 'firebase/auth';
import { first } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, updateCurrentUser, User } from 'firebase/auth';


@Injectable()

export class AuthService {
	private user: any;

	constructor(public afAuth: AngularFireAuth, public cookies: CookieService, public db: AngularFirestore) { 
		afAuth.onAuthStateChanged((user) => {
			if (user) {
				this.user = user;
				console.log(user);
			} else {
			  this.user = null;
			}
		  });
	}



	async login (email:string, password:string) {
		try {


		const auth = await this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => { 
			const user = userCredential.user;

			userCredential.user?.getIdToken().then((idToken) => {
				this.cookies.set("token", idToken);
			})
		});
		
		
		}

		catch(error) {
			console.log(error);
			alert("Se ha producido un error, por favor, inténtelo de nuevo");
			return error;
		}
	
	}




	async register (email:string, password:string, nombre:string, apellidos:string,
		 sexo:string, fecha:string, telefono: string, dni: string) {
		

		const auth = await this.afAuth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {

			//const user = userCredential.user;

			let token: any;
			token = userCredential.user?.getIdToken.toString

			this.db.collection('users').
			doc(userCredential.user?.uid).
			set({nombre: nombre, apellidos: apellidos, sexo: sexo, 
			fechaDeNacimiento: fecha, telefono: telefono, dni: dni, correo: email});

		});
		
	}

	currentUser(): boolean {


		if (this.user != null) {
			console.log("Hay un usuario logueado");
			return true;
		}

		else {
			console.log("No hay usuario logueado");
			return false;
		}
	}



	async logOut() {
	
		try {
			await this.afAuth.signOut().then(() => {
				alert("Se ha cerrado la sesión correctamente");
				window.location.assign('/')
			}) ;
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


