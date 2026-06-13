import { useParams } from "react-router-dom";
import jogos from "../../Data/jogos";
import Jogoscard from "../../Components/jogos/jogos";
import Buttonretorne from "../../Components/buttonslinks/Retorne/ButtonRetorne";
import './Categorias.css'
function Categorias() {
    
    const { categoria } = useParams();

    const jogosFiltrados = jogos.filter(
        jogo => jogo.categoria.includes(categoria)
    );

    return (
        <>
            <h1 className="CategoriaTitulo">Categoria: {categoria}</h1>

            <h2 className="JogosEncontrados">Jogos encontrados: {jogosFiltrados.length}</h2>

            <div className="buttonContainer">
                <Buttonretorne/>
            </div>

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