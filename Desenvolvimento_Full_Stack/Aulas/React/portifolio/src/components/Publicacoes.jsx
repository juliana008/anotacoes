const publicacoes = [
    {
        imagem: 'https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/eventos/evento-250568-banner.jpeg',
        titulo: 'Modelagem de Comunicação Acústica e Óptica em Ambiente Fechado: simulação de atenuação e propagação em misturas multifásicas',
    },
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8UERLBlUDtPtR6-WQ2fWSI4n7B0m-lO4SiILd7pQtYJgdwVMVa37MYlG&s=10',
        titulo: 'Água e Saneamento básico: É possível ser acessível para todos?',
    },
];

function Publicacoes() {
    return (
        <div id="div2">
            <a id="publicações"></a>
            <h2>Publicações</h2>
            <div className="cards-grid">
                {publicacoes.map((item, index) => (
                    <div className="custom-card" key={index}>
                        <img src={item.imagem} className="card-img-top" alt="Publicação" />
                        <div className="card-body">
                            <p><strong>{item.titulo}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Publicacoes;
