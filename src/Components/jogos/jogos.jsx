import buttonsteam from '../buttonslinks/STEAM/Buttonsteam'
import buttonepic from '../buttonslinks/EPIC/Buttonepic'
import { Link } from 'react-router-dom';
import './jogos.css'

function Jogoscard({nome, caminhoImagem, id}){
    return(
        <Link className="CardLink" 
                to={`/VHub_Games/${id}`}>
                    <div
                        className='CardJogos'>
                            <img src={caminhoImagem}/>
                            <h2>{nome}</h2>            
                    </div>

        </Link>
    )
}

export default Jogoscard;