import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import CardAtividade from './components/CardAtividade'
import atividades from './data/atividades'

const filtros = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel']

function App() {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null)
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [envioRealizado, setEnvioRealizado] = useState(false)

  useEffect(() => {
    if (!atividadeSelecionada) {
      return undefined
    }

    const fecharModalAoPressionarTecla = (event) => {
      if (event.key === 'Escape') {
        setAtividadeSelecionada(null)
      }
    }

    window.addEventListener('keydown', fecharModalAoPressionarTecla)

    return () => {
      window.removeEventListener('keydown', fecharModalAoPressionarTecla)
    }
  }, [atividadeSelecionada])

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

  const handleFormularioChange = (event) => {
    const { name, value } = event.target
    setFormulario((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formulario.nome || !formulario.email || !formulario.assunto || !formulario.mensagem) {
      return
    }

    setEnvioRealizado(true)
    setFormulario({ nome: '', email: '', assunto: '', mensagem: '' })
  }

  const atividadesConcluidas = atividades.filter(
    (atividade) => atividade.status === 'Concluída',
  ).length
  const totalAtividadesEsperado = 30
  const percentualConcluido = Math.round(
    (atividadesConcluidas / totalAtividadesEsperado) * 100,
  )

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
          <div className="progresso__cabecalho">
            <h2>{atividadesConcluidas} de 30 concluídas</h2>
            <span>{percentualConcluido}%</span>
          </div>

          <div
            className="barra-progresso"
            role="progressbar"
            aria-label={`Progresso das atividades: ${percentualConcluido}% concluído`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percentualConcluido}
          >
            <span
              className="barra-progresso__fill"
              style={{ width: `${percentualConcluido}%` }}
            />
          </div>
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
                  onAbrirDetalhes={() => setAtividadeSelecionada(atividade)}
                />
              ))}
            </div>
          )}
        </section>

        <section id="contato" className="bloco">
          <div className="secao__cabecalho">
            <p className="eyebrow">Contato</p>
            <h2>Entre em contato</h2>
          </div>

          <form className="formulario-contato" onSubmit={handleSubmit}>
            <div className="campo-formulario">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={formulario.nome}
                onChange={handleFormularioChange}
                required
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formulario.email}
                onChange={handleFormularioChange}
                required
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="assunto">Assunto</label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                value={formulario.assunto}
                onChange={handleFormularioChange}
                required
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formulario.mensagem}
                onChange={handleFormularioChange}
                required
              />
            </div>

            <button type="submit" className="botao-formulario">
              Enviar mensagem
            </button>

            {envioRealizado && (
              <p className="mensagem-sucesso">Mensagem enviada com sucesso!</p>
            )}
          </form>
        </section>
      </main>

      {atividadeSelecionada && (
        <div className="modal__backdrop" onClick={() => setAtividadeSelecionada(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal__fechar"
              aria-label="Fechar detalhes"
              onClick={() => setAtividadeSelecionada(null)}
            >
              ×
            </button>

            <p className="eyebrow">Detalhes da atividade</p>
            <h3 id="modal-titulo">{atividadeSelecionada.titulo}</h3>
            <p className="modal__meta">
              {atividadeSelecionada.tecnologia} • {atividadeSelecionada.status}
            </p>
            <p>{atividadeSelecionada.descricao}</p>
            <p className="modal__texto">
              Esta entrega reforçou a prática de organização de interfaces, uso de
              componentes e clareza na experiência do usuário.
            </p>
          </div>
        </div>
      )}

      <Rodape />
    </div>
  )
}

export default App
