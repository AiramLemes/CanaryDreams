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

		if (this.user == null) {

			await this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => { 
				alert("Enhorabuena, ha iniciado sesión correctamente.")
				window.location.assign('/')
			});	

		}

		else {
			alert("Ya hay una sesión abierta. Si quiere usar otra cuenta, cierre sesión");
		}
		
		
	
	}




	async register (email:string, password:string, nombre:string, apellidos:string,
		 sexo:string, fecha:string, telefono: string, dni: string) {
		

		await this.afAuth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {

			this.db.collection('users').
			doc(userCredential.user?.uid).
			set({nombre: nombre, apellidos: apellidos, sexo: sexo, 
			fechaDeNacimiento: fecha, telefono: telefono, dni: dni, correo: email});

			alert('Se ha registrado correctamente');
			window.location.assign('/');

			// Comprobar si al registrarse ya se ha iniciado sesión.

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

		let tempUser: any;
		await this.afAuth.signOut().then((value) => {

			if (tempUser != value) {
				alert("Se ha cerrado la sesión correctamente");
				window.location.assign('/')
			}

			else {
				alert("No existe ninguna sesión en uso");
			}

			
		}) ;

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


