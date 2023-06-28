import { Component } from '@angular/core';
import Swal from 'sweetalert2';

interface Targeta{
  valor: number;
  nombre: string;
}


@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
    nombre!: string;
    compradores!: number;
    cantidadBoletos!:number;
    resultado!:number;
    valorTarjeta!:number;
    precioBoleto:number = 12;
    // max=7*this.compradores;

    tarjeta: Targeta[]=[
      {
        valor: 1,
        nombre:"Si"
      },
      {
        valor: 2,
        nombre: "No"
      }
    ];

    comprar(){
      const maximoBoletos = 7*this.compradores;
      if(this.cantidadBoletos>maximoBoletos){
        Swal.fire(
          'OPS..',
          'No se pueden comprar mas de 7 boletos!',
          'info'
        )
        this.resultado=0;
      }else{
        if(this.cantidadBoletos==3 || this.cantidadBoletos==4 || this.cantidadBoletos==5){
          if(this.valorTarjeta==1){      
            const resultado=((this.cantidadBoletos)*this.precioBoleto)-(((this.cantidadBoletos))*(this.precioBoleto)/(100*0.10))
            const resultado2=((resultado)/(100*0.10)) 
            this.resultado=resultado-resultado2;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }else{
            const resultado=((this.cantidadBoletos)*this.precioBoleto)-(((this.cantidadBoletos))*(this.precioBoleto)/(100*0.10))
            this.resultado=resultado;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }
        }else if(this.cantidadBoletos>5){
          if(this.valorTarjeta==1){
            const resultado=(((this.cantidadBoletos)*this.precioBoleto)-(((this.cantidadBoletos))*(this.precioBoleto)*(0.15)))
            const resultado2=((resultado)*(0.10)) 
            this.resultado=resultado-resultado2;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }else{
            const resultado=(((this.cantidadBoletos)*this.precioBoleto)-(((this.cantidadBoletos))*(this.precioBoleto)*(0.15)))
            this.resultado=resultado;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }
        }else{
          if(this.valorTarjeta==1){
            const resultado=(((this.cantidadBoletos)*this.precioBoleto))
            const resultado2=((resultado)/(100*0.10))
            this.resultado=resultado-resultado2;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }else{
            const resultado=(((this.cantidadBoletos)*this.precioBoleto))
            this.resultado=resultado;
            Swal.fire(
              'Exito',
              'Los boletos secompraroncon exito !!',
              'success'
            )
          }
        }
      }
    }
}
