function CardAtividade({ numero, titulo, descricao, tecnologia, status, link }) {
  const statusClass = {
    Planejada: 'status status--planejada',
    'Em andamento': 'status status--andamento',
    Concluída: 'status status--concluida',
  }[status]

  return (
    <article className="card">
      <span className="card__numero">{numero}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <small>{tecnologia}</small>
      <span className={statusClass}>{status}</span>
      <a href={link} className="card__link" target="_blank" rel="noreferrer">
        Ver atividade
      </a>
    </article>
  )
}

export default CardAtividade
