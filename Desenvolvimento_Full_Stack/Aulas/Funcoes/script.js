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

function somar(numero1, numero2){
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

