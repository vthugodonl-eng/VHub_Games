import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import jogos from '../../Data/jogos';
import Buttonepic from "../../Components/buttonslinks/EPIC/Buttonepic";
import Buttonsteam from "../../Components/buttonslinks/STEAM/Buttonsteam";
import './JogosEscolhidos.css'


function Jogos(){
    const {jogosId} = useParams();

    const jogo = jogos.find((jogo) => jogo.id === Number(jogosId));

    
    if(!jogo){
        return <h1>Jogo nao encontrado</h1>

    }
    
    return(
        <>
        <div className="JogosEscolhidos">
            <h1 className="Titulo">{jogo.nome}</h1>
            
            <Link className="buttonRetorne"
                to={"/VHub_Games/"}>
    
                        <a>Retorne ao Lobby</a>
                    
            </Link>
            <div className="container">
                <img src={jogo.caminhoImagem} />

            </div>
            
            <p className="Traducao">Traducao:{jogo.traducao}</p>
            
            <p className="Descricao">Descricao:{jogo.descricao}</p>
            
            <p className="Sinopse">Sinopse:{jogo.sinopse}</p>
            
            <div className="containerButton">
            
            {jogo.linksteam &&(
                <Buttonsteam linksteam={jogo.linksteam}/>
            )}
            
            {jogo.linkepic &&(
                <Buttonepic linkepic={jogo.linkepic}/>
            )}
                
                </div>
            
            </div>
    </>
    )
}

export default Jogos;