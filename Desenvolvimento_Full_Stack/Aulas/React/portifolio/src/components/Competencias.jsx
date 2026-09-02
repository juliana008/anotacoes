const competencias = ['Docker', 'UML', 'Pesquisa e Desenvolvimento (P&D)', 'Matlab', 'C++', 'Git', 'Linux embarcado', 'Dispositivos IoT', 'Simulações acústicas'];

function Competencias() {
    return (
        <div id="div2">
            <a id="competencias"></a>
            <h2>Competências</h2>
            <marquee style={{ width: '100%' }}>
                {competencias.map((item) => (
                    <div id="comp" key={item}>{item}</div>
                ))}
            </marquee>
        </div>
    );
}

export default Competencias;
