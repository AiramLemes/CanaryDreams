import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { IslaService } from './services/islas.service';
import { IslaComponent } from './isla/isla.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/services/auth.service';
import { InformacionComponent } from './Cuenta/informacion/informacion.component';
import { SeguridadComponent } from './Cuenta/seguridad/seguridad.component';
import { MenuComponent } from './Cuenta/menu/menu.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { AlojamientosService } from './services/alojamientos.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    IslaComponent,
    HeaderComponent,
    InformacionComponent,
    SeguridadComponent,
    MenuComponent,
    CondicionesComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule, NgbModule,
  ],
  providers: [IslaService, AlojamientosService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
