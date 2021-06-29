class Rectangulo{
    constructor(largo, ancho){
        this.largo = largo;
        this.ancho =ancho
    }

    calcularArea(){
      
        return console.log("el area del rectangulo es: "+this.largo*this.ancho+" metros")
    }
    calcularPerimetro(){

        return console.log(`el perímetro del rectángulo es: ${(2*this.largo)+(2*this.ancho)}metros`)
    }
}

let area = new Rectangulo(3,2);

area.calcularArea();
area.calcularPerimetro();