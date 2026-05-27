import './buttonslinks.css'

function Button({titulo, link}){
    return(
        <a className="button"
        href={link}>
        Ver jogo
        </a>
    )
}

export default Button;