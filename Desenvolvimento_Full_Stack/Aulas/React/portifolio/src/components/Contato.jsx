function Contato() {
  const contatos = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juliana-barretto-vilas-boas-115593333/',
      imagem: 'https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
    },
    {
      label: 'Gmail',
      href: 'mailto:julianabvilasboas@gmail.com',
      imagem: 'https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png',
    },
  ];

  return (
    <div id="div1">
      <a id="contato"></a>
      <h5>Entre em contato:</h5>
      <div className="contato-container">
        {contatos.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <img src={item.imagem} alt={item.label} height="45px" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contato;