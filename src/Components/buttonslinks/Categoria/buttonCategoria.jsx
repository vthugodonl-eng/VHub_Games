import { Link } from "react-router-dom";
import "./buttonCategoria.css";


function ButtonCategoria({categorias}){

    return(
            <div className="categorias">
                {categorias.map(categoria => (

                <Link
                    key={categoria}
                    className="buttonCategoria"
                    to={`/VHub_Games/categoria/${categoria}`}
                >
                    {categoria}
                </Link>

    
            ))}

            </div>
    )

}

export default ButtonCategoria;