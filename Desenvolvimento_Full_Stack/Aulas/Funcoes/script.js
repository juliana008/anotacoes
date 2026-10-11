function mostrarDataAtual(){
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR');

    console.log('Data de hoje: ', dataFormatada);
}
mostrarDataAtual();

function calcularMediaFixa(){
    //Valores definidos dentro da própria função
    const nota1=8;
    const nota2=6;
    const media = (nota1 + nota2)/2;

    console.log('Média: ', media);
}

calcularMediaFixa();

//HTML esperado: <p id="mensagem"></p>
function preencherMensagem(){
    const paragrafo = document.getElementById('mensagem');

    if(paragrafo){
        paragrafo.textContent = 'JavaScript alterou este texto!';
    }
}

preencherMensagem();

//nome é o parâmetro: uma variável local da função
function saudar(nome){
    console.log(`Olá, ${nome}!`);
}

saudar('Ana');
saudar('Carlos');
saudar('Marina');

// 1. Esta função é chamada quando o botão é clicado
function dispararFuncao() {
    // Captura o elemento do input pelo ID
    const inputElemento = document.getElementById("valor");
    
    // Pega o valor exato digitado dentro do input
    const valorDigitado = inputElemento.value;

    // 2. Passa o valor como parâmetro para a sua função principal
    dobrar(valorDigitado);
}

function dobrar(valor){
    const dobro = 2*valor;
    console.log(`O dobro do valoir é: ${dobro}`);
}

function somar(numero1i, numero2i){
    const numero1 = parseInt(numero1i)
    const numero2 = parseInt(numero2i)

    const resultado = numero1 + numero2;
    console.log(`Soma: ${resultado}`);
}

somar(4, 6);
somar(10, 25);
somar(2.5, 1.5);

function mostraNome(){
    const nome = "Juliana"
    console.log(`Seu nome é ${nome}`);
    receberNome(nome);
}

mostraNome();

function receberNome(nome){
    console.log(`Olá, ${nome}`);
}

function calcularArea(base, altura){
    const area = base * altura /2;
    console.log(`Area: ${area}`);
}

function aprovacao(media){
    if(media>=7){
        console.log(`Aprovado!`)
    }else{
        console.log(`Reprovado!`)
    }
}

function converterCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5 / 9;

    console.log(`${fahrenheit} graus fahrenheit são ${celsius} graus celsius`);
}

function cor(valorCor){
    console.log(`A cor digitada foi: ${valorCor}`);
}

function executarCalculoIMC(pesoI, alturaI) {
    // IMPORTANTE: Mude para parseFloat para aceitar números com ponto/decimal
    const peso = parseFloat(pesoI);
    const altura = parseFloat(alturaI);

    console.log("Peso digitado:", peso);
    console.log("Altura digitada:", altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Valores inválidos! Peso e altura devem ser maiores que zero.");
        return;
    }

    // Executa o cálculo se estiver tudo correto
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    console.log(`IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`);
}


function calcularConta(consumo, tarifa) {
    const total = consumo * tarifa;
    console.log(`Valor da conta: R$ ${total.toFixed(2).replace('.', ',')}`);
}


function contarPares(numeros) {
    let quantidade = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            quantidade++;
        }
    }
    console.log(`Quantidade de valores pares: ${quantidade}`);
}

function cadastrarAluno(nome, curso, notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    const media = soma / notas.length;

    const aluno = {
        nome: nome,
        curso: curso,
        notas: notas,
        media: media.toFixed(2)
    };

    console.log("Aluno cadastrado:", aluno);
}

function calculadora(num1, num2, operacao) {
    let resultado = 0;

    const num1f = parseInt(num1)
    const num2f = parseInt(num2)
    
    if (operacao === '+') {
        resultado = num1f + num2f;
    } else if (operacao === '-') {
        resultado = num1f - num2f;
    } else if (operacao === '*') {
        resultado = num1f * num2f;
    } else if (operacao === '/') {
        resultado = num1f / num2f;
    } else {
        console.log("Operação inválida!");
        return;
    }

    console.log(`Resultado da operação: ${resultado}`);
}
