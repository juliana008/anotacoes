function Cabecalho({ temaEscuro, onToggleTema }) {
  return (
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

      <div className="cabecalho__acoes">
        <button
          type="button"
          className="botao-tema"
          onClick={onToggleTema}
          aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {temaEscuro ? '☀️ Claro' : '🌙 Escuro'}
        </button>

        <div className="cabecalho__avatar" aria-label="Avatar do estudante">
          A
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
