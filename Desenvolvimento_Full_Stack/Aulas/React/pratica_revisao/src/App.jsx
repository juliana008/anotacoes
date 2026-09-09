import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import CardAtividade from './components/CardAtividade'
import atividades from './data/atividades'

function App() {
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

        <section id="atividades" className="bloco">
          <div className="secao__cabecalho">
            <p className="eyebrow">Atividades</p>
            <h2>Lista de entregas</h2>
          </div>

          <div className="cards">
            {atividades.map((atividade) => (
              <CardAtividade
                key={atividade.numero}
                numero={atividade.numero}
                titulo={atividade.titulo}
                descricao={atividade.descricao}
                tecnologia={atividade.tecnologia}
                link={atividade.link}
              />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  )
}

export default App
