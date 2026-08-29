import { useState } from 'react'
import './App.css'

function App(){
    const[nome, setNome]=useState("");
    const[participantes, setParticipantes]=useState([]);
    const[erro, setErro]=useState("");

    function adicionarParticipante(evento){
        evento.preventDefault();

        if(nome.trim() === ""){
            setErro("Por favor, digite um nome");
            return;
        }

        // Adicionar o participante à lista
        setParticipantes([...participantes, { id: Date.now(), nome: nome.trim() }]);
        setNome("");
        setErro("");
    }

    function removerParticipante(id){
        setParticipantes(participantes.filter(p => p.id !== id));
    }

    function limpaForm(){
        setNome("");
        setErro("");
    }

    return (
        <main>
            <h1>Lista de Participantes</h1>
            <p className='introducao'>Registre os nomes dos visitantes</p>
            
            <form onSubmit={adicionarParticipante}>
                <div className='campo'>
                    <input 
                        id='nome' 
                        type='text' 
                        placeholder='Digite o nome do participante' 
                        value={nome} 
                        onChange={(evento)=> setNome(evento.target.value)}
                        autoFocus
                    />
                </div>

                <div className='botoes'>
                    <button type='submit'>Adicionar Participante</button>
                    <button type='button' onClick={limpaForm}>Limpar</button>
                </div>
                {erro && <p className="msgerro">{erro}</p>}
            </form>

            {participantes.length > 0 && (
                <section className='resultado'> 
                    <h2>Participantes Registrados ({participantes.length})</h2> 
                    <ul className='lista-participantes'>
                        {participantes.map((p) => (
                            <li key={p.id} className='participante-item'>
                                <span>{p.nome}</span>
                                <button 
                                    type='button' 
                                    className='btn-remover'
                                    onClick={() => removerParticipante(p.id)}
                                    aria-label={`Remover ${p.nome}`}
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    );
}
export default App