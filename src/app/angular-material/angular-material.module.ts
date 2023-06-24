import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { DistanciaComponent } from '../distancia/distancia.component';
import { ResistenciaComponent } from '../resistencia/resistencia.component';


@NgModule({
  declarations: [
    DistanciaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule
  ],
  exports:[
    DistanciaComponent
  ]
})
export class AngularMaterialModule { }
