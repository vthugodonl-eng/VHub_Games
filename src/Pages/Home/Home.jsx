import { useEffect, useState } from 'react'
import jogos from "../../Data/jogos"
import CardJogos from "../../Components/jogos/jogos"
import './Home.css'
import ButtonCategoria from '../../Components/buttonslinks/Categoria/ButtonCategoria'
import { Link } from 'react-router-dom'

function Home(){
    /*Home*/
    const[listadejogos, setlistadejogos] = useState(jogos)

    const[qtdJogos, setqtdJogos] = useState(0)

    useEffect(() => {
    
    setqtdJogos(listadejogos.length)
    },[listadejogos])

    /*Categorias*/
    
    const [categoriaSelecionada, setcategoriaSelecionada] = useState("Todos");

    const categorias = [...new Set(jogos.flatMap(categorias => categorias.categoria))];
    
    const jogosfiltrados = jogos.filter( categoria => categoria.categoria.includes(categoriaSelecionada));

    return(
    
        <>
            <main>
                <h1 className="logo">VHUB GAMES</h1>
            
                <h2 className="contador-jogos"> 🎮 Jogos disponíveis: {qtdJogos}</h2>
                
                <ButtonCategoria categorias={categorias}/>
                
                <h2 className='Titulocatalogo'>Catalogo de jogos</h2>


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
        </main>
        </>

    )

}

export default Home;