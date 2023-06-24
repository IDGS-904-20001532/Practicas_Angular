import { Component } from '@angular/core';
interface Bandas{
  banda: string;
  color?: string;
  valor: number;
}

interface Valores{
banda1?:      string;
colorBanda1?: string;
banda2?:      string;
colorBanda2?: string;
banda3?:      number;
colorBanda3?: string;
tolerancia?:  number;
colorTolerancia?: string;
valor?:       number;
valorMinimo?: number;
valorMaximo?: number;
}

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {

  bandas: Bandas[]=[
    {
      banda:'NEGRO',
      color:'black',
      valor: 0
    },
    {
      banda:'MARRON',
      color:'brown',
      valor: 1
    },
    {
      banda:'ROJO',
      color:'red',
      valor: 2
    },
    {
      banda:'NARANAJA',
      color:'orange',
      valor: 3
    },
    {
      banda:'AMARILLO',
      color:'yellow',
      valor: 4
    },
    {
      banda:'VERDE',
      color:'green',
      valor: 5
    },
    {
      banda:'AZUL',
      color:'blue',
      valor: 6
    },
    {
      banda:'VIOLETA',
      color:'violet',
      valor: 7
    },
    {
      banda:'GRIS',
      color:'gray',
      valor: 8
    },
    {
      banda:'BLANCO',
      color:'white',
      valor: 9
    }
  ];

  banda3: Bandas[]=[
    {
      banda:'NEGRO',
      color:'black',
      valor: 1
    },
    {
      banda:'MARRON',
      color:'brown',
      valor: 10
    },
    {
      banda:'ROJO',
      color:'red',
      valor: 100
    },
    {
      banda:'NARANAJA',
      color:'orange',
      valor: 1000
    },
    {
      banda:'AMARILLO',
      color:'yellow',
      valor: 10000
    },
    {
      banda:'VERDE',
      color:'green',
      valor: 100000
    },
    {
      banda:'AZUL',
      color:'blue',
      valor: 1000000
    },
    {
      banda:'VIOLETA',
      color:'violet',
      valor: 10000000
    },
    {
      banda:'GRIS',
      color:'gray',
      valor: 100000000
    },
    {
      banda:'BLANCO',
      color:'white',
      valor: 1000000000
    },
    {
      banda: 'ORO',
      color:'gold',
      valor: 0.1
    },
    {
      banda: 'PLATA',
      color:'silver',
      valor: 0.01
    }
  ];

  tolerancia: Bandas[]=[
    {
      banda: 'ORO',
      valor: 0.05
    },
    {
      banda: 'PLATA',
      valor: 0.1
    }
  ];

  valorBanda1!:string;
  valorBanda2!:string;
  valorBanda3!:number;
  valorTolerancia!:number;
  resultado!:number;
  valorMinimo!:number;
  valorMaximo!:number;
  valores: Valores[]=[];
  colores: any[]=[];


  calcularResistencia() {
    const valorB = (this.valorBanda1 + this.valorBanda2);
    this.resultado= parseFloat(valorB) * this.valorBanda3;
    // this.resultado = valorT + this.valorTolerancia;
    this.valorMinimo = this.resultado * (1 - this.valorTolerancia);
    this.valorMaximo = this.resultado * (1 + this.valorTolerancia);

    this.valores.push({
      "banda1":this.valorBanda1,
      "colorBanda1":this.bandas[parseFloat(this.valorBanda1)].color,
      "banda2":this.valorBanda2,
      "colorBanda2":this.bandas[parseFloat(this.valorBanda2)].color,
      "banda3":this.valorBanda3,
      "tolerancia":this.valorTolerancia,
      "valor":this.resultado,
      "valorMinimo":this.valorMinimo,
      "valorMaximo":this.valorMaximo
      });
      
   }
  }

 
