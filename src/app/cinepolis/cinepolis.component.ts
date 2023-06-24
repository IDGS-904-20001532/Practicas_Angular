import { Component } from '@angular/core';

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
    compradores!: string;
    cantidad!:string;
    resultado!:string;
    valorTarjeta!:string;
    precioB:number = 12
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
    }

    // if request.method=="POST":
    // pagoT= (request.form.get("btnTarjeta"))
    // numP= (request.form.get("txtNumPer"))
    // precioB = 12
    // max=7*int(numP)
    // if(int(numb)>int(max)):
    //     resp=("No se pueden comprar mas de 7 boletos")
    //     return render_template("Practica3Cinepolis-main.html",resp=resp)
    // else:
    //     if(int(numb)==3 or int(numb)==4 or int(numb)==5):
    //         if(pagoT=="1"):
    //             resultado=(int(numb)*precioB)-(float(int(numb))*(precioB)/(100*0.10))
    //             resultado2=(float(resultado)/(100*0.10))           
    //             resp="Se ha aplicado 10%, de descuento, ademas de 10%, de descuesto por pagar con tarjeta Cineco, por lo que el precio a pagar es de: ${}".format(str(float(resultado)-(float(resultado2))))  
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
    //         else:
    //             resultado=(int(numb)*precioB)-(float(int(numb))*(precioB)/(100*0.10))            
    //             resp=resp="Se ha aplicado 10%, de descuento, por lo que el precio a pagar es de: ${}".format(str(resultado))
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
    //     elif(int(numb)>5):
    //         if(pagoT=="1"):
    //             resultado=((int(numb)*precioB)-(float(int(numb))*(precioB)*(0.15)))
    //             resultado2=(float(resultado)*(0.10))           
    //             resp="Se ha aplicado 15%, de descuento, ademas de 10%, de descuesto por pagar con tarjeta Cineco, por lo que el precio a pagar es de: ${}".format(str(float(resultado)-(float(resultado2))))  
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
    //         else:
    //             resultado=(int(numb)*precioB)-(float(int(numb))*(precioB)*(0.15))            
    //             resp="Se ha aplicado 15%, de descuento, por lo que el precio a pagar es de: ${}".format(str(resultado))
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
    //     else:
    //         if(pagoT=="1"):
    //             resultado=(float(int(numb)*precioB))
    //             resultado2=(float(resultado)/(100*0.10))
    //             resp="Se ha aplicado 10%, de descuesto por pagar con tarjeta Cineco, por lo que el precio a pagar es de: ${}".format(str(float(resultado)-(float(resultado2))))  
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
    //         else:
    //             resultado=(int(numb)*precioB)
    //             resp="El precio a pagar es de: ${}".format(str(resultado))
    //             return render_template("Practica3Cinepolis-main.html",resp=resp)
}
