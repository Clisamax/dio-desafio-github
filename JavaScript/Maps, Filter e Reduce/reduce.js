numeros = [2, 3, 6, 5, 10, 15, 17];

/*const somaReduce = numeros.reduce(function(valorAcumulador, valorArray){
    return valorAcumulador + valorArray;
},0) */

const somaReduce = numeros.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray , 0); 

console.log('somaRecuce', somaReduce);