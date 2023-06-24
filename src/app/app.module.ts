import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { ResistenciaComponent } from './resistencia/resistencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ResistenciaModuleModule } from './resistencia-module/resistencia-module.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { CinepolisAngularMaterialModule } from './cinepolis-angular-material/cinepolis-angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ResistenciaModuleModule,
    CinepolisAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
