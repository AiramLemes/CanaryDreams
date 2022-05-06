import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IslaComponent } from './isla/isla.component';
import { InformacionComponent } from './Cuenta/informacion/informacion.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { AnfitrionComponent } from './anfitrion/anfitrion/anfitrion.component';
import { ContactarComponent } from './contactar/contactar.component';
import { Paso1Component } from './anfitrion/paso1/paso1.component';
import { Paso2Component } from './anfitrion/paso2/paso2.component';
import { Paso3Component } from './anfitrion/paso3/paso3.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'isla/:nombre', component: IslaComponent },
  { path: 'cuenta/informacion', component: InformacionComponent },
  { path: 'condiciones', component: CondicionesComponent, pathMatch: 'full' },
  { path: 'privacidad', component: PrivacidadComponent, pathMatch: 'full' },
  { path: 'anfitrion', component: AnfitrionComponent, pathMatch: 'full' },
  { path: 'anfitrion/paso1', component: Paso1Component, pathMatch: 'full' },
  { path: 'anfitrion/paso2/:id', component: Paso2Component, pathMatch: 'full' },
  { path: 'anfitrion/paso3/:id', component: Paso3Component, pathMatch: 'full' },
  { path: 'ayuda/contactar', component: ContactarComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
