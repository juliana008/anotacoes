import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

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
  {
    numero: '04',
    titulo: 'Cabeçalho e identidade',
    descricao: 'Criei a identidade visual do portfólio com nome, curso e objetivo principal.',
    tecnologia: 'HTML / CSS',
  },
  {
    numero: '05',
    titulo: 'Menu de navegação',
    descricao: 'Adicionei links internos para facilitar a navegação entre as seções.',
    tecnologia: 'HTML / CSS',
  },
  {
    numero: '06',
    titulo: 'Sistema visual',
    descricao: 'Defini variáveis de cor, tipografia, espaçamento e elementos visuais consistentes.',
    tecnologia: 'CSS',
  },
  {
    numero: '07',
    titulo: 'Cartões de atividades',
    descricao: 'Criei o componente visual de cada entrega com número, título e tecnologia.',
    tecnologia: 'CSS',
  },
  {
    numero: '08',
    titulo: 'Flexbox no layout',
    descricao: 'Ajustei alinhamento e distribuição de elementos com Flexbox para melhorar o layout.',
    tecnologia: 'CSS',
  },
  {
    numero: '09',
    titulo: 'Grid das atividades',
    descricao: 'Organizei os cartões em uma grade responsiva para distribuição visual equilibrada.',
    tecnologia: 'CSS Grid',
  },
  {
    numero: '10',
    titulo: 'Responsividade',
    descricao: 'Apliquei ajustes para manter a homepage legível em telas menores e maiores.',
    tecnologia: 'Media Queries',
  },
]

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

      <Rodape />
    </div>
  )
}

export default App
