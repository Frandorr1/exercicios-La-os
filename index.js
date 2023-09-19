// this is a js file
// Franciele Dörr Dos Santos
//Laços - Materiais Complementares


//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
valor += i
}
console.log(valor)
////Este código está criando um loop "FOR" que começa com a variável "i" igual a 0 e continua enquanto "i" é menor que 5. 
///A cada loop, o valor de "i" é adicionado à variável "valor". Após o loop, o código imprime o valor final da variável "valor" no console.
//O resultado impresso no console será 10 , pois o loop adiciona os valores de 0, 1, 2, 3 4 na variável "valor", resultando (4+3+2+1)


//2. Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
if (numero > 18) {
console.log(numero)
}
}

//a) O que vai ser impresso no console? IMPRESSO NA VERTICAL 19, 21, 23, 25, 27, 30.

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?



//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
let linha = ""
for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
linha += "*"
}
console.log(linha)
quantidadeAtual++
}
//*
//**
//***
//****



//Se o usuário digitar "V", a saída deve ser: "Boa Tarde!"



//Exercícios de escrita de código
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.



const pergunta = Number(prompt("quantos bichinhos você tem?"));

const bichinhos = []
let i = 0;
if (pergunta.numeroBichos <=0){
  console.log (`${pergunta.numeroBichos}     que pena! Você pode adotar um pet!`)
} else{
    while (i<=pergunta) {
        bichinhos[i] = prompt("Qual o nome");
        i++;
}
}
console.log(bichinhos); //['DETETIVE', 'AURORA', 'CALOPSITA']




//2. Considere que você tenha acesso a um array (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações
//pedidas:
//a) Escreva um programa que imprime cada um dos valores do array original.
//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero ". Depois, imprima este novo array.
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.

const arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (const iterator of arrayOriginal) {
    console.log(iterator);
// 80
//30
//130
//40
//60
//21
//70
//120
//90
//103
//110
//55
}

for (const iterator of arrayOriginal) {
    console.log(iterator/10);
} //8, 3 , 13 , 4 , 6, 2.1, 7, 12, 9, 10.3, 11, 5.5

for (const iterator of arrayOriginal) {
    if(iterator % 2 === 0){
        console.log(iterator);
    }
}
//8
//30
//130
//40
//60
//70
//120
//90
//110

arrayOriginal.includes[true];


function encontrarMaiorNumero (arr){
    let maior = arr[0];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior){
            maior = arr[i]
        }
    }
    return "o maior numero é" + maior;
}
console.log(encontrarMaiorNumero(arrayOriginal)); //130



function imprimirMaiorMenor(itens) {
    let maiorNumero = itens[0]
    let menorNumero = itens[0]
    for (let i = 1; i < itens.length; i++) {
        if (itens[i] > maiorNumero) {
            maiorNumero = itens[i]
        }
        if (itens[i] < menorNumero) {
            menorNumero = itens[i]
        }
    }
    console.log(`Maior número: ${maiorNumero}`)
    console.log(`Menor número: ${menorNumero}`)
}

imprimirLista(arrayOriginal)
imprimirValoresDivididos(arrayOriginal)
filtrarNumerosPares(arrayOriginal)
identificarElementos(arrayOriginal)
imprimirMaiorMenor(arrayOriginal)
