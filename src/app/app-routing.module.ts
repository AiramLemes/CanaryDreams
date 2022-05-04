import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IslaComponent } from './isla/isla.component';
import { InformacionComponent } from './Cuenta/informacion/informacion.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'isla/:nombre', component: IslaComponent },
  { path: 'cuenta/informacion', component: InformacionComponent },
  { path: 'Condiciones', component: CondicionesComponent, pathMatch: 'full' },
  { path: 'privacidad', component: PrivacidadComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
