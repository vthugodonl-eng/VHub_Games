import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import jogos from '../../Data/jogos';
import Buttonepic from "../../Components/buttonslinks/EPIC/Buttonepic";
import Buttonsteam from "../../Components/buttonslinks/STEAM/Buttonsteam";
import Buttonretorne from '../../Components/buttonslinks/Retorne/ButtonRetorne'
import './JogosEscolhidos.css'


function Jogos(){
    const {jogosId} = useParams();

    const jogo = jogos.find((jogo) => jogo.id === Number(jogosId));

    
    if(!jogo){
        return <h1>Jogo não encontrado</h1>

    }
    
    return(
        <>
        <div className="JogosEscolhidos">
            <h1 className="Titulo">{jogo.nome}</h1>
            
            <Buttonretorne />
            
            <div className="container">
                <img src={jogo.caminhoImagem} />

            </div>
            
            

            <h2>Informacoes</h2>

            <h3 className="Traducao">Traducão:{jogo.traducao}</h3>
            
            <h4 className="Descricao">Descricão:{jogo.descricao}</h4>
            
            <h5 className="Sinopse">Sinopse:{jogo.sinopse}</h5>
            
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