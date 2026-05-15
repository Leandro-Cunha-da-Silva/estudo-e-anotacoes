// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 5
//     let anoDeNascimento = 2026 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--

//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento);
    
// }

// calcularAnoDeNascimento(31, 3, imprimirAnoDeNascimento)


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(2));
console.log(triplicar(3));
console.log(quadruplicar(4));