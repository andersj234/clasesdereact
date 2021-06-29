class Distancia{
    constructor(numero){
        this.numero = numero
    }

    MillasAMetros(){
        console.log(`Metros: ${this.numero* 1609.34}m`)
    }
    MillasAKilometros(){
        console.log(`Kilómetros: ${(this.numero / 1000) * 1609.34}km`)
    }
}

let millas = new Distancia(32)

millas.MillasAMetros();
millas.MillasAKilometros()