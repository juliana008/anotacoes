import { useState } from 'react';

function Perfil() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto((atual) => !atual);
    };

    return (
        <>
            <a id="inicio"></a>

            <div id="div1">
                <figure style={{ margin: 0 }}>
                    <blockquote style={{ margin: 0 }}>
                        <h1>Juliana Barretto Vilas Boas</h1>
                    </blockquote>
                    <h6>Engenharia de Computação | Senai Cimatec</h6>
                </figure>
            </div>

            <nav className="custom-navbar">
                <a className="nav-brand" href="#inicio">
                    Juliana Vilas Boas
                </a>

                <button className="nav-toggle" onClick={toggleMenu} aria-label="Abrir Menu">
                    ☰
                </button>

                <ul className={`nav-links ${menuAberto ? 'open' : ''}`}>
                    <li><a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a></li>
                    <li><a href="#resumo" onClick={() => setMenuAberto(false)}>Resumo</a></li>
                    <li><a href="#experiencia" onClick={() => setMenuAberto(false)}>Experiência</a></li>
                    <li><a href="#competencias" onClick={() => setMenuAberto(false)}>Competências</a></li>
                    <li><a href="#publicações" onClick={() => setMenuAberto(false)}>Publicações</a></li>
                    <li><a href="#hobbies" onClick={() => setMenuAberto(false)}>Hobbies</a></li>
                    <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
                </ul>
            </nav>

            <div className="perfil-section">
                <div>
                    <img
                        id="foto_perfil"
                        src="..\..\public\images\Screenshot_20260813_233844_Gallery[1].jpg"
                        alt="Foto de perfil de Juliana Barretto Vilas Boas"
                    />
                </div>
                <div className="perfil-info">
                    <h2>Graduanda Engenharia de Computação na Universidade SENAI CIMATEC</h2>
                    <h6>Salvador, Bahia</h6>
                </div>
            </div>
        </>
    );
}

export default Perfil;
