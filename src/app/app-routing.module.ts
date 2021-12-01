import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvocatoriaunoComponent } from './convocatoriauno/convocatoriauno.component';
import { ConvocatoridosComponent } from './convocatoridos/convocatoridos.component';
import { BraileComponent } from './braile/braile.component';
const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'convocatoriauno', component: ConvocatoriaunoComponent },
  { path: 'convocatoriados', component: ConvocatoridosComponent },
  { path: 'braile', component: BraileComponent },
  { path: '**', component: HomeComponent }
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
