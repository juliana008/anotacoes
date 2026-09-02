function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <strong>Juliana Barretto Vilas Boas</strong>
        <p>Engenharia de Computação • Pesquisa • Robótica • Desenvolvimento</p>
        <p>© {anoAtual} — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;