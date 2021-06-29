  
class Cifras {
    constructor(num) {
      this.numero = num;
    }
  
    esPar() {
      if (this.numero % 2 === 0) {
        console.log("es par");
      } else {
        console.log("no es par");
      }
    }
    sumaDigitos() {
      let arraynums = [];
      let suma;
      let num = this.numero.toString();
      for (let i = 0; i < num.length; i++) {
        arraynums[i] = num[i];
      }
      for (let x = 0; x < arraynums.length; x++) {
        suma = parseInt(arraynums[x]) + parseInt(arraynums[x-1]);
      }
      console.log(`El número es: ${this.numero} y la suma de sus dígitos es: ${suma}`)
    }
  }
  
  let cifraInicio = new Cifras(13);
  cifraInicio.esPar();
  cifraInicio.sumaDigitos();