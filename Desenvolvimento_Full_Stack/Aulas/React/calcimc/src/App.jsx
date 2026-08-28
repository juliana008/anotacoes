import { useState } from 'react'
import './App.css'

function App(){
    const[nome, setNome]=useState("");
    const[peso, setPeso]=useState("");
    const[altura, setAltura]=useState("");
    const[resultado, setResultado]=useState(null);
    const[erro, setErro]=useState("");
    //const[, set]=useState();

    function classificarImc(imc){
        if(imc < 18.5){ return "Abaixo do peso";}
        else if(imc < 25){return "Peso ideal";}
        else if(imc < 30){return "Sobrepeso";}
        else if(imc < 35){return "Obesidade 1";}
        else if(imc < 40){return "Obesidade 2";}
        return "Obesidade 3";
    }

    function calcularImc(evento){
        evento.preventDefault();
        const pesoConvertido = Number(peso.replace(",","."));
        const alturaConvertida = Number(altura.replace(",","."));

        if(nome.trim() === "" || pesoConvertido<=0 || alturaConvertida<=0){
            setErro("Preencha com valores válidos");
            setResultado(null);
            return;
        }

        const imcCalculado = pesoConvertido/(alturaConvertida * alturaConvertida);
        setResultado({
            valor: imcCalculado.toFixed(2),
            classificacao: classificarImc(imcCalculado)
        })

        setErro("");
    }

    function limpaForm(){
        setNome("");
        setPeso("");
        setAltura("");
        setResultado(null);
        setErro("");
    }


    return (
        <main>
            <h1>Calculadora de IMC</h1>
            <p className ='Introdicao'>Informe seu peso e altura para calcular o IMC</p>
            
            <form onSubmit={calcularImc}>
                <div className='campo'>
                    <input id='nome' type='text' placeholder='Digite o seu nome' value={nome} onChange={(evento)=> setNome(evento.target.value)}/>
                    <input id='peso' type='text' inputMode='decimal' placeholder='Digite o seu peso Ex: 86,5' value={peso} onChange={(evento)=> setPeso(evento.target.value)}/>
                    <input id='altura' type='text' inputMode='decimal' placeholder='Digite a sua altura Ex: 1,70' value={altura} onChange={(evento)=> setAltura(evento.target.value)}/>
                </div>

                <div className='botoes'>
                    <button type='submit'>Calcular IMC</button>
                    <br />
                    <button type='button' onClick={limpaForm}>Limpar</button>
                </div>
                {erro && <p className="msgerro">{erro}</p>}
                {resultado && (
                    <section className='resultado'> 
                    <h2>Resultado</h2> 
                    <p>Olá, <strong>{nome}</strong>!</p> 
                    <br /> 
                        <p>Seu IMC é <strong>{resultado.valor}</strong></p>
                    <br />
                    <p>
                            Classificação:
                            <strong> {resultado.classificacao}</strong>
                    </p>
                    </section>)
                }
            </form>
        </main>
    );
}
export default App