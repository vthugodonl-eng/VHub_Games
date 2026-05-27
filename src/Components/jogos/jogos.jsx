import button from '../buttonslinks/buttonslinks'

function Jogoscard({nome, traducao, descricao, sinopse, link, caminhoImagem}){
    return(
        <div
            className='CardJogos'>
            <img src={caminhoImagem} width={200} height={200}/>
            <h2>{nome}</h2>
            <p> Traducao:{traducao}</p>
            <p>Descricao:{descricao}</p>
            <p>Sinopse:{sinopse}</p>
            <a href={link}>Ver jogo</a>
            </div>
    )
}

export default Jogoscard;