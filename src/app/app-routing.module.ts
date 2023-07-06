import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { PizzasComponent } from './pizzas/pizzas.component';

const routes: Routes=[
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'Cinepolis', component:CinepolisComponent},
    {path: 'Distancia', component:DistanciaComponent},
    {path: 'Resistencia', component:ResistenciaComponent},
    {path: 'Pizzas', component:PizzasComponent}
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
