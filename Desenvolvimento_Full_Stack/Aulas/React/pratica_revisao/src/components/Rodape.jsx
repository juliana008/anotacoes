function Rodape() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="rodape" id="contato">
      <p>© {anoAtual} - Portfólio acadêmico</p>
    </footer>
  )
}

export default Rodape
