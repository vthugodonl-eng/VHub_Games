import buttonsteam from '../buttonslinks/STEAM/buttonsteam'
import buttonepic from '../buttonslinks/EPIC/buttonepic'

function Jogoscard({nome, traducao, descricao, sinopse, linksteam, linkepic, caminhoImagem}){
    return(
        <div
            className='CardJogos'>
            <img src={caminhoImagem} width={200} height={200}/>
            <h2>{nome}</h2>
            <p> Traducao:{traducao}</p>
            <p>Descricao:{descricao}</p>
            <p>Sinopse:{sinopse}</p>
            {linksteam &&(
                <a href={linksteam}>Ver jogo na STEAM</a>
            )}
            {linkepic &&(
                <a href={linkepic}>Ver jogo na EPIC</a>
            )}
            
            </div>
    )
}

export default Jogoscard;