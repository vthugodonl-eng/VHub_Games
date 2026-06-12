import { useParams } from "react-router-dom";
import jogos from "../../Data/jogos";
import Jogoscard from "../../Components/jogos/jogos";

function Categorias() {

    console.log("Entrei na pagina Categorias");
    const { categoria } = useParams();

    const jogosFiltrados = jogos.filter(
        jogo => jogo.categoria.includes(categoria)
    );

    console.log("jogosfiltrados", jogosFiltrados);
    return (
        <>
            <h1>Categoria: {categoria}</h1>

            <p>Jogos encontrados: {jogosFiltrados.length}</p>

            <div id="center">

                {jogosFiltrados.map(jogo => (

                    <Jogoscard
                        key={jogo.id}
                        id={jogo.id}
                        nome={jogo.nome}
                        caminhoImagem={jogo.caminhoImagem}
                    />

                ))}

            </div>

        </>
    );
}

export default Categorias;