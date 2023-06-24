import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepolisComponent } from '../cinepolis/cinepolis.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisAngularMaterialModule { }
