import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResistenciaComponent } from '../resistencia/resistencia.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ResistenciaComponent  
  ],
  imports: [
    CommonModule,
     BrowserModule,
     FormsModule
  ],
  exports:[
    ResistenciaComponent
  ]
})
export class ResistenciaModuleModule { }
