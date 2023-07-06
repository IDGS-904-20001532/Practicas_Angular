import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule

  ]
})
export class PizzasModule { }
