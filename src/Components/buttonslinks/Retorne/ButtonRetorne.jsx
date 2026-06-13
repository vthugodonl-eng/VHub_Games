import './ButtonRetorne.css'
import { Link } from 'react-router-dom';

function Buttonretorne(){
    return(
    
        <Link className="buttonretorne"
            to={"/VHub_Games/"}>Retorne Lobby
        </Link>
        
    )        
}

export default Buttonretorne;

