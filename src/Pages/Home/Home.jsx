import { useEffect, useState } from 'react'
import jogos from "../../Data/jogos"
import CardJogos from "../../Components/jogos/jogos"
import './Home.css'
import buttonCategoria from '../../Components/buttonslinks/Categoria/buttonCategoria'
import { Link } from 'react-router-dom'

function Home(){
    const[listadejogos, setlistadejogos] = useState(jogos)

    const[qtdJogos, setqtdJogos] = useState(0)

    useEffect(() => {
    
    setqtdJogos(listadejogos.length)
    },[listadejogos])

    return(
    
        <>
            <h1 className="logo">VHUB GAMES</h1>
        
            <h2 className="contador-jogos"> 🎮 Jogos disponíveis: {qtdJogos}</h2>
            
            <section id='cat'>
                <Link className='Linkcat' to={`/VHub_Games/Categoria`}>
                    <div className='Categoria'>
                        <a>Categorias</a>
                    </div>
                </Link>  
            </section>         
            
            <h4>Catalogo de jogos</h4>


            <section id='center'>
                    
                    {
                    listadejogos.map((jogos, index) => (
                        <CardJogos
                            key={index}
                            id={jogos.id}
                            nome={jogos.nome}
                            caminhoImagem={jogos.caminhoImagem}
                        />
                    ))
                    }
            </section>
        </>

    )

}

export default Home;