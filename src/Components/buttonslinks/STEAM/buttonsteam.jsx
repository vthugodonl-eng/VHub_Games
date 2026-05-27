import './buttonsteam.css'

function buttonsteam({titulo, linksteam}){
    return(
        <a className="buttonsteam"
        href={linksteam}>
        Ver jogo na STEAM
        </a>
    )
}

export default buttonsteam;
