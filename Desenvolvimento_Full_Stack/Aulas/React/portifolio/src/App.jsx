import { useState } from 'react';
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <a id="inicio"></a>

      {/* Cabeçalho */}
      <div id="div1">
        <figure style={{ margin: 0 }}>
          <blockquote style={{ margin: 0 }}>
            <h1>Juliana Barretto Vilas Boas</h1>
          </blockquote>
          <h6>Engenharia de Computação | Senai Cimatec</h6>
        </figure>
      </div>

      {/* Navbar sem Bootstrap */}
      <nav className="custom-navbar">
        <a className="nav-brand" href="#inicio">
          Juliana Vilas Boas
        </a>

        <button className="nav-toggle" onClick={toggleMenu} aria-label="Abrir Menu">
          ☰
        </button>

        <ul className={`nav-links ${menuAberto ? 'open' : ''}`}>
          <li>
            <a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a>
          </li>
          <li>
            <a href="#resumo" onClick={() => setMenuAberto(false)}>Resumo</a>
          </li>
          <li>
            <a href="#experiencia" onClick={() => setMenuAberto(false)}>Experiência</a>
          </li>
          <li>
            <a href="#competencias" onClick={() => setMenuAberto(false)}>Competências</a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
          </li>
        </ul>
      </nav>

      {/* Perfil */}
      <div className="perfil-section">
        <div>
          <img
            id="foto_perfil"
            src="./images/Screenshot_20260813_233844_Gallery[1].jpg"
            alt="Imagem de perfil"
          />
        </div>
        <div className="perfil-info">
          <h2>Graduanda Engenharia de Computação na Universidade SENAI CIMATEC</h2>
          <h6>Salvador, Bahia</h6>
        </div>
      </div>

      {/* Resumo */}
      <div id="div2">
        <a id="resumo"></a>
        <h2>Resumo</h2>
        <div id="div3">
          Meu interesse por Programação, Eletrônica e Robótica me levou a cursar Engenharia de Computação na Universidade SENAI CIMATEC, onde tenho adquirido conhecimentos na área de programação, com conhecimentos em C, C++, e noções em Java e Python. Tenho desenvolvido habilidades em resolução de problemas e pensamento lógico, com participações em competições de programação e projetos de robótica. Adicionalmente, venho aprimorando minhas habilidades interpessoais por meio de experiências colaborativas em artigos científicos, projetos acadêmicos e eventos técnicos, fortalecendo minha capacidade de comunicação, trabalho em equipe e adaptabilidade.
        </div>
      </div>

      {/* Experiência */}
      <div id="div2">
        <a id="experiencia"></a>
        <h2>Experiência</h2>

        <div className="cards-grid">
          <div className="custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdP5F72cfbl8Ihdv14VliPb3h1oBuAcfe76dcipIg0EDxdTnO5nZJ4gMg&s=10"
              className="card-img-top"
              alt="SENAI CIMATEC"
            />
            <div className="card-body">
              <p>Graduanda de Engenharia de Computação<br />fevereiro de 2024 - Presente</p>
            </div>
          </div>

          <div className="custom-card">
            <img src="./images/Elet_Emb.jpg" className="card-img-top" alt="Eletrônica Embarcada" />
            <div className="card-body">
              <p>Iniciação Tecnológica - Eletrônica Embarcada<br />julho de 2025 - Presente</p>
            </div>
          </div>

          <div className="custom-card">
            <img
              src="https://images.even3.com/phD_8Kzg6TIq1oD5HQ8qSYtMoOA=/fit-in/250x250/smart/https://static.even3.com/logos/PATOVETORIZADO.10d97701d8c54e3ebf96.png"
              className="card-img-top"
              alt="Monitoria voluntária"
            />
            <div className="card-body">
              <p>
                Monitoria voluntária, com o objetivo de ministrar aulas, preparar conteúdos e exercícios focados em programação competitiva com C++, além de orientar os alunos na resolução de problemas típicos da OBI, promovendo um ambiente de aprendizado e prática contínua.
              </p>
            </div>
          </div>

          <div className="custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshvXlxpbnI05XY60ceu8iCJnEAmsBJqG3m5hG9Hrbcw&s"
              className="card-img-top"
              alt="AWS Cloud Club"
            />
            <div className="card-body">
              <p>AWS Cloud Club | Vice-líder Administrativa<br />janeiro de 2026 - junho de 2026 (6 meses)</p>
            </div>
          </div>

          <div className="custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqWy_tfhEXnWlfRjs1dPTe3tjeY0edA9t7TX6gpMfYBOWBWl-c49P7hU&s=10"
              className="card-img-top"
              alt="IEEE RAS"
            />
            <div className="card-body">
              <p>IEEE Robotics and Automation Society Trainee<br />novembro de 2024 - junho de 2025 (8 meses)</p>
            </div>
          </div>

          <div className="custom-card">
            <img
              src="https://maratona.sbc.org.br/hist/2021/resultados21/fotos/salao21.jpg"
              className="card-img-top"
              alt="Maratona de Programação"
            />
            <div className="card-body">
              <p>Experiência em maratonas variadas de programação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competências */}
      <div id="div2">
        <a id="competencias"></a>
        <h2>Competências</h2>
        <marquee style={{ width: '100%' }}>
          <div id="comp">Docker</div>
          <div id="comp">UML</div>
          <div id="comp">Pesquisa e Desenvolvimento (P&D)</div>
          <div id="comp">Matlab</div>
          <div id="comp">C++</div>
          <div id="comp">Git</div>
          <div id="comp">Sistemas embarcados</div>
          <div id="comp">Dispositivos IoT</div>
          <div id="comp">Simulações acústicas</div>
        </marquee>
      </div>

    {/*Publicações*/}

    <div id="div2">
        <a id="publicações"></a>
        <h2>Publicações</h2>
        <div className="cards-grid">

          <div className="custom-card">
            <img
              src="https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/eventos/evento-250568-banner.jpeg"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p><strong>Modelagem de Comunicação Acústica e Óptica em Ambiente Fechado: simulação de atenuação e propagação em misturas multifásicas</strong></p>
            </div>            
          </div>


          <div className="custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8UERLBlUDtPtR6-WQ2fWSI4n7B0m-lO4SiILd7pQtYJgdwVMVa37MYlG&s=10"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p><strong>Água e Saneamento básico: É possível ser acessível para todos?</strong></p>
            </div>            
          </div>


        </div>
      </div>




      {/* Hobbies & Interesses */}
      <div id="div2">
        <a id="hobbies"></a>
        <h2>Hobbies & Interesses</h2>
        <div className="cards-grid">
          <div className="custom-card">
            <img
              src="https://cdn.mindminers.com/blog/uploads/2018/02/livros.png"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p>Leitura</p>
            </div>            
          </div>


          <div className="custom-card">
            <img
              src="https://sissifios.cdn.magazord.com.br/img/2025/08/blog/24221/imagem-1-pontos-de-croche-basico-aos-avancados.jpg"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p>Artesanato</p>
            </div>
          </div>


          <div className="custom-card">
            <img
              src="https://m.media-amazon.com/images/I/81A1CfRyYIL.jpg"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p>Bordado</p>
            </div>
          </div>


          <div className="custom-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuufBILsizTxFnVudX4LaZ5HWbItouWdx2bA9cqoSwzq4DsWt6Ty6BkN_&s=10"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p>Música</p>
            </div>
          </div>

          <div className="custom-card">
            <img
              src="https://tm.ibxk.com.br/2026/03/09/peak_80e286fceb.jpg?ims=400x0/filters:quality(70)"
              className="card-img-top"
              alt="Hobbies"
            />
            <div className="card-body">
              <p>Jogos colaborativos online</p>
            </div>
          </div>




        </div>
      </div>

      {/* Contato */}
      <a id="contato"></a>
      <div id="div1">
        <h5>Entre em contato:</h5>
        <div className="contato-container">
          <a
            href="https://www.linkedin.com/in/juliana-barretto-vilas-boas-115593333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn"
              height="45px"
            />
          </a>
          <a href="mailto:julianabvilasboas@gmail.com">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png"
              alt="Gmail"
              height="45px"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;