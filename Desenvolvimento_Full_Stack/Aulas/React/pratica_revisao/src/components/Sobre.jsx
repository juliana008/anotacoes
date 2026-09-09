function Sobre() {
  return (
    <section id="sobre" className="bloco sobre">
      <p className="eyebrow">Sobre</p>
      <h2>Quem sou eu</h2>

      <div className="sobre__conteudo">
        <p>
          Sou estudante de desenvolvimento web e estou construindo esse portfólio para
          registrar minha evolução em HTML, CSS, JavaScript, React, Git e Vercel.
        </p>
        <p>
          A proposta da homepage é demonstrar, de forma clara e organizada, como cada
          entrega contribuiu para meu aprendizado, meu raciocínio e minha prática de
          desenvolvimento.
        </p>
      </div>

      <ul className="sobre__lista">
        <li>HTML semântico</li>
        <li>CSS moderno e responsivo</li>
        <li>React com componentes e estado</li>
        <li>Git para versionamento</li>
        <li>Vercel para publicação</li>
      </ul>
    </section>
  )
}

export default Sobre
