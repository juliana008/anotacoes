import './App.css'

const atividades = [
  {
    numero: '01',
    titulo: 'Preparar o ambiente',
    descricao: 'Verifiquei Node.js, npm e Git e iniciei a aplicação React.',
    tecnologia: 'React / Vite',
  },
  {
    numero: '02',
    titulo: 'Versionamento com Git',
    descricao: 'Organizei o repositório, criei o primeiro commit e configurei o fluxo inicial.',
    tecnologia: 'Git',
  },
  {
    numero: '03',
    titulo: 'Estrutura semântica',
    descricao: 'Estruturei a página com cabeçalho, navegação, conteúdo principal e rodapé.',
    tecnologia: 'HTML / JSX',
  },
]

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <div className="cabecalho__texto">
          <p className="eyebrow">Portfólio acadêmico</p>
          <h1>Meu portfólio de atividades</h1>
          <p className="cabecalho__descricao">
            Estudante de desenvolvimento web compartilhando a evolução das entregas com
            HTML, CSS, React, Git e Vercel.
          </p>
          <a className="botao" href="#atividades">
            Ver atividades
          </a>
        </div>

        <div className="cabecalho__avatar" aria-label="Avatar do estudante">
          A
        </div>
      </header>

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
              <article className="card" key={atividade.numero}>
                <span className="card__numero">{atividade.numero}</span>
                <h3>{atividade.titulo}</h3>
                <p>{atividade.descricao}</p>
                <small>{atividade.tecnologia}</small>
                <button type="button">Ver atividade</button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="rodape" id="contato">
        <p>© 2026 - Portfólio acadêmico</p>
      </footer>
    </div>
  )
}

export default App
