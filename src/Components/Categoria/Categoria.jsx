import { Link } from "react-router-dom"
import jogos from "../../Data/jogos"
import buttonCategoria from "../buttonslinks/Categoria/buttonCategoria"

function Categoria({categoria}){
    
    const [categoria, setCategoria] = useState("Todos");

    const categoria = jogos.filter( (categoria) => categoria === jogos.descricao)
    
    return(
        <>
            <div className="categorias">
                <Link className="buttonCategoria">
                    {categoria}
                </Link>
            </div>
        </>
    )

}

export default Categoria