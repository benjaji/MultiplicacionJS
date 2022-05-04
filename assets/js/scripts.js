//entrada
var dato = parseInt(  prompt('Ingrese un numero') );
console.log(`El dato ingresado fue : ${dato}`);

// proceso
//definicion de la arrow function multiplicar
let multiplicar = (valor) =>{
  for(let i=1; i <= valor ; i++){
    let resultado = valor*i;
    console.log(`${valor} * ${i} = ${resultado}`);
  }
};

//definiciion de la arrow function factorial
let factorial = (otroValor) => {
  for(let i=1; i <= otroValor; i++){
    let res = 1;
    for(let j=1; j<=i; j++){
      res= res*j;
    }
    console.log(`Factorial de ${i} es ${res} `);
  }

 };

//invocación de la arrow function multiplicar
multiplicar(dato);
//invocacion de la arrow function Factorial
factorial(dato);
