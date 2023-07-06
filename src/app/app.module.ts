import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ResistenciaModuleModule } from './resistencia-module/resistencia-module.module';
import { CinepolisAngularMaterialModule } from './cinepolis-angular-material/cinepolis-angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { PizzasModule } from './pizzas/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ResistenciaModuleModule,
    CinepolisAngularMaterialModule,
    PizzasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
