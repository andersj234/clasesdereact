class Finanzas{
    constructor(num){
        this.num = num;
    }

    dolaresToEuros(){
        return console.log(`${this.num * 0.84} euros`)
    }
    eurosToDolares(){
        return console.log(`${this.num * 1.19} dolares`)
    }
}

let cambioDivisas = new Finanzas(2)

cambioDivisas.dolaresToEuros();
cambioDivisas.eurosToDolares();