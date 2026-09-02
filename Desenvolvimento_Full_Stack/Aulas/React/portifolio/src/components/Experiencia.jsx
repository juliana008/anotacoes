const experiencias = [
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdP5F72cfbl8Ihdv14VliPb3h1oBuAcfe76dcipIg0EDxdTnO5nZJ4gMg&s=10',
        texto: 'Graduanda de Engenharia de Computação fevereiro de 2024 - Presente',
    },
    {
        imagem: './images/Elet_Emb.jpg',
        texto: 'Iniciação Tecnológica - Eletrônica Embarcada julho de 2025 - Presente',
    },
    {
        imagem: 'https://images.even3.com/phD_8Kzg6TIq1oD5HQ8qSYtMoOA=/fit-in/250x250/smart/https://static.even3.com/logos/PATOVETORIZADO.10d97701d8c54e3ebf96.png',
        texto: 'Monitoria voluntária, com o objetivo de ministrar aulas, preparar conteúdos e exercícios focados em programação competitiva com C++, além de orientar os alunos na resolução de problemas típicos da OBI, promovendo um ambiente de aprendizado e prática contínua.',
    },
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshvXlxpbnI05XY60ceu8iCJnEAmsBJqG3m5hG9Hrbcw&s',
        texto: 'AWS Cloud Club | Vice-líder Administrativa janeiro de 2026 - junho de 2026 (6 meses)',
    },
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqWy_tfhEXnWlfRjs1dPTe3tjeY0edA9t7TX6gpMfYBOWBWl-c49P7hU&s=10',
        texto: 'IEEE Robotics and Automation Society Trainee novembro de 2024 - junho de 2025 (8 meses)',
    },
    {
        imagem: 'https://maratona.sbc.org.br/hist/2021/resultados21/fotos/salao21.jpg',
        texto: 'Experiência em maratonas variadas de programação',
    },
];

function Experiencia() {
    return (
        <div id="div2">
            <a id="experiencia"></a>
            <h2>Experiência</h2>

            <div className="cards-grid">
                {experiencias.map((item, index) => (
                    <div className="custom-card" key={index}>
                        <img src={item.imagem} className="card-img-top" alt="Experiência" />
                        <div className="card-body">
                            <p>{item.texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiencia;
