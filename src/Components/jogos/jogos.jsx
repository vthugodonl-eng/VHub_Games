import Buttonepic from '../buttonslinks/EPIC/Buttonepic';
import Buttonsteam from '../buttonslinks/STEAM/Buttonsteam';
import { Link } from 'react-router-dom';
import './jogos.css'

function Jogoscard({nome, caminhoImagem, id}){
    return(
        <Link className="CardLink" 
                to={`/VHub_Games/${id}`}>
                    <div
                        className='CardJogos'>
                            <img src={caminhoImagem} alt={`Capa do jogo ${nome}`}/>
                            
                            <h2>{nome}</h2>            
                    </div>

        </Link>
    )
}

export default Jogoscard;