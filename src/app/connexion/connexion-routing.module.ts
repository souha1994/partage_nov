import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion.component';

const routes: Routes = [
 {path:'',component:ConnexionComponent,children:[
   {path:'',component:LoginComponent},
   {path:'inscription',component:InscriptionComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
