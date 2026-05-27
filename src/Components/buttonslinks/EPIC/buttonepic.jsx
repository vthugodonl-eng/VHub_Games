import './buttonepic.css'

function buttonepic({titulo, linkepic}){
    return(
        <a className="buttonepic"
        href={linkepic}>
        Ver Jogo na EPIC
        </a>
    )
}

export default buttonepic;