import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import CardAtividade from './components/CardAtividade'
import atividades from './data/atividades'

const filtros = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel']

function App() {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos')
  const [busca, setBusca] = useState('')

  const atividadesFiltradas = atividades.filter((atividade) => {
    const atendeFiltro =
      filtroSelecionado === 'Todos' ||
      atividade.tecnologia.includes(filtroSelecionado)

    const textoBusca = busca.trim().toLowerCase()
    const atendeBusca =
      textoBusca === '' ||
      atividade.titulo.toLowerCase().includes(textoBusca) ||
      atividade.descricao.toLowerCase().includes(textoBusca)

    return atendeFiltro && atendeBusca
  })

  const atividadesConcluidas = atividades.filter(
    (atividade) => atividade.status === 'Concluída',
  ).length

  return (
    <div className="pagina">
      <Cabecalho />

      <nav className="menu" aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#atividades">Atividades</a>
        <a href="#contato">Contato</a>
      </nav>

      <main>
        <section id="sobre" className="bloco">
          <p className="eyebrow">Sobre</p>
          <h2>Objetivo do portfólio</h2>
          <p>
            Este projeto reúne as entregas realizadas ao longo do curso, demonstrando o
            crescimento em estrutura, lógica e apresentação visual.
          </p>
        </section>

        <section className="bloco progresso">
          <p className="eyebrow">Progresso</p>
          <h2>{atividadesConcluidas} de 30 concluídas</h2>
        </section>

        <section id="atividades" className="bloco">
          <div className="secao__cabecalho">
            <p className="eyebrow">Atividades</p>
            <h2>Lista de entregas</h2>
          </div>

          <div className="filtros" aria-label="Filtros de tecnologia">
            {filtros.map((filtro) => (
              <button
                key={filtro}
                type="button"
                className={filtro === filtroSelecionado ? 'filtro ativo' : 'filtro'}
                onClick={() => setFiltroSelecionado(filtro)}
              >
                {filtro}
              </button>
            ))}
          </div>

          <label className="campo-busca" htmlFor="busca-atividade">
            <span>Buscar atividade</span>
            <input
              id="busca-atividade"
              type="text"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Digite um título ou descrição"
            />
          </label>

          {atividadesFiltradas.length === 0 ? (
            <p className="sem-resultado">Nenhuma atividade encontrada.</p>
          ) : (
            <div className="cards">
              {atividadesFiltradas.map((atividade) => (
                <CardAtividade
                  key={atividade.id}
                  numero={atividade.numero}
                  titulo={atividade.titulo}
                  descricao={atividade.descricao}
                  tecnologia={atividade.tecnologia}
                  status={atividade.status}
                  link={atividade.link}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Rodape />
    </div>
  )
}

export default App
