import { Component } from '@angular/core';


interface Tamanio{
  valor: number;
  nombre: string;
}

interface Ingrediente{
  valor: number;
  nombre: string;
  check: boolean;
}
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre!:string;
  tamanioPizza!:number;
  valorIngrediente:number[]=[];
  valorTotal!:number;
  numeroPizzas!:number;
  detalleIngredientes!:string[];
  detalleTamano!:string;
  resultadoCompra:any[]=[];
  resultadoTotal:any[]=[];
  ventasTotales!:number;


  tamanio: Tamanio[]=[
    {
      valor: 1,
      nombre:"Chica $40"
    },
    {
      valor: 2,
      nombre: "Mediana $80"
    },
    {
      valor: 3,
      nombre: "Grande $120"
    }
  ];

  ingrediente: Ingrediente[]=[
    {
      valor: 10,
      nombre:"Jamon $10",
      check:false
    },
    {
      valor: 10,
      nombre: "Piña $10",
      check:false
    },
    {
      valor: 10,
      nombre: "Champiñones $10",
      check:false
    }
  ];


  guardarPizzas(){
    const i= this.ingrediente.filter(ingrediente => ingrediente.check).map(ingrediente => ingrediente.valor);
    const ingredienteNombre =this.ingrediente.filter(ingrediente => ingrediente.check).map(ingrediente => ingrediente.nombre);
    let ingredientesSeleccionados=i.reduce((acumulador, actual) => acumulador + actual, 0);

    console.log(i)
    console.log(ingredientesSeleccionados)

     let valorTamaño = 0;
     let valorIngrediente = 0;

     if (this.tamanioPizza == 1)
     {
         valorTamaño = 40;
         valorIngrediente = ingredientesSeleccionados;
         this.valorTotal = (valorTamaño + valorIngrediente) * this.numeroPizzas;
         this.detalleIngredientes = ingredienteNombre;
         this.detalleTamano = "Chica";
         this.resultadoCompra.push(
          {
            "Tamanio": this.detalleTamano,
            "Ingrediente": this.detalleIngredientes,
            "NumPizzas": this.numeroPizzas,
            "SubTotal":this.valorTotal
          }
         );
     }
     if (this.tamanioPizza == 2)
     {
         valorTamaño = 80;
         valorIngrediente = ingredientesSeleccionados;
         this.valorTotal = (valorTamaño + valorIngrediente) * this.numeroPizzas;
         this.detalleIngredientes = ingredienteNombre;
         this.detalleTamano = "Mediana";
         this.resultadoCompra.push(
          {
            "Tamanio": this.detalleTamano,
            "Ingrediente": this.detalleIngredientes,
            "NumPizzas": this.numeroPizzas,
            "SubTotal":this.valorTotal
          }
         );

     }
     if (this.tamanioPizza == 3)
     {
         valorTamaño = 120;
         valorIngrediente = ingredientesSeleccionados;
         this.valorTotal = (valorTamaño + valorIngrediente) * this.numeroPizzas;
         this.detalleIngredientes = ingredienteNombre;
         this.detalleTamano = "Grande";
         this.resultadoCompra.push(
          {
            "Tamanio": this.detalleTamano,
            "Ingrediente": this.detalleIngredientes,
            "NumPizzas": this.numeroPizzas,
            "SubTotal":this.valorTotal
          }
         );

     }
  }


  comprarTotal(){
    const totalCompras=this.resultadoCompra.reduce((acumulador, actual:any) => acumulador + actual.SubTotal, 0);
    this.resultadoTotal.push({
      "Nombre":this.nombre,
      "Total":totalCompras
    });

    this.resultadoCompra=[];
    this.ventasTotales=this.resultadoTotal.reduce((acumulador, actual:any) => acumulador + actual.Total, 0);

  }

  eliminar(i:any){
    this.resultadoCompra.splice(i,1)
  }


}
