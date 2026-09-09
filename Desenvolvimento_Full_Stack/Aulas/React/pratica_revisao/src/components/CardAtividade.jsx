function CardAtividade({ numero, titulo, descricao, tecnologia, link }) {
  return (
    <article className="card">
      <span className="card__numero">{numero}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <small>{tecnologia}</small>
      <a href={link} className="card__link" target="_blank" rel="noreferrer">
        Ver atividade
      </a>
    </article>
  )
}

export default CardAtividade
