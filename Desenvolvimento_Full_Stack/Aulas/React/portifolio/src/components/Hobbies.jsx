const hobbies = [
    {
        imagem: 'https://cdn.mindminers.com/blog/uploads/2018/02/livros.png',
        nome: 'Leitura',
    },
    {
        imagem: 'https://sissifios.cdn.magazord.com.br/img/2025/08/blog/24221/imagem-1-pontos-de-croche-basico-aos-avancados.jpg',
        nome: 'Artesanato',
    },
    {
        imagem: 'https://m.media-amazon.com/images/I/81A1CfRyYIL.jpg',
        nome: 'Bordado',
    },
    {
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuufBILsizTxFnVudX4LaZ5HWbItouWdx2bA9cqoSwzq4DsWt6Ty6BkN_&s=10',
        nome: 'Música',
    },
    {
        imagem: 'https://tm.ibxk.com.br/2026/03/09/peak_80e286fceb.jpg?ims=400x0/filters:quality(70)',
        nome: 'Jogos colaborativos online',
    },
];

function Hobbies() {
    return (
        <div id="div2">
            <a id="hobbies"></a>
            <h2>Hobbies & Interesses</h2>
            <div className="cards-grid">
                {hobbies.map((item, index) => (
                    <div className="custom-card" key={index}>
                        <img src={item.imagem} className="card-img-top" alt={item.nome} />
                        <div className="card-body">
                            <p>{item.nome}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobbies;
