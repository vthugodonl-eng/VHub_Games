import { useEffect, useState } from 'react'
import './App.css'
import jogos from "./Data/jogos"
import CardJogos from "./Components/jogos/jogos"


function App() {
  const[listadejogos, setlistadejogos] = useState([
    {nome: "RED DEAD REDEMPTION 2", traducao: jogos["RedDead2"].traducao, descricao: jogos["RedDead2"].descricao, sinopse: jogos["RedDead2"].sinopse, link: jogos["RedDead2"].link, caminhoImagem: jogos["RedDead2"].caminhoImagem},
    {nome: "GOD OF WAR: RAGNARöK", traducao: jogos["GOWRG"].traducao, descricao:jogos["GOWRG"].descricao, sinopse: jogos["GOWRG"].sinopse, link: jogos["GOWRG"].link, caminhoImagem: jogos["GOWRG"].caminhoImagem },
    {nome: "GTA V", traducao: jogos["gtav"].traducao, descricao: jogos["gtav"].descricao, sinopse: jogos["gtav"].sinopse, link: jogos["gtav"].link, caminhoImagem: jogos["gtav"].caminhoImagem },
    {nome: "ELDEN RING", traducao: jogos["eldenring"].traducao, descricao: jogos["eldenring"].descricao, sinopse: jogos["eldenring"].sinopse, link: jogos["eldenring"].link,  caminhoImagem: jogos["eldenring"].caminhoImagem},
    {nome: "CS:GO 2", traducao: jogos["csgo2"].traducao, descricao: jogos["csgo2"].descricao, sinopse: jogos["csgo2"].sinopse, link: jogos["csgo2"].link, caminhoImagem:jogos["csgo2"].caminhoImagem},
  ])

  const[qtdJogos, setqtdJogos] = useState(0)

  useEffect(() => {
    
    setqtdJogos(listadejogos.length)
  },[listadejogos])

  return(
    
    <>
    <h1 className="logo">VHUB GAMES</h1>
    <h2 className="contador-jogos"> 🎮 Jogos disponíveis: {qtdJogos}</h2>
    <section id='center'>
      {
        listadejogos.map((jogos, index) => (
          <CardJogos
            key={index}
            nome={jogos.nome}
            traducao={jogos.traducao}
            descricao={jogos.descricao}
            sinopse={jogos.sinopse}
            link={jogos.link}
            caminhoImagem={jogos.caminhoImagem}
          />
        ))
      }
    </section>
    
    
    </>

  )

}

export default App
