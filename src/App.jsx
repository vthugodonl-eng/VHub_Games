import { useEffect, useState } from 'react'
import './App.css'
import jogos from "./Data/jogos"
import CardJogos from "./Components/jogos/jogos"


function App() {
  const[listadejogos, setlistadejogos] = useState([
    {nome: "RED DEAD REDEMPTION 2", traducao: jogos["RedDead2"].traducao, descricao: jogos["RedDead2"].descricao, sinopse: jogos["RedDead2"].sinopse, linksteam: jogos["RedDead2"].linksteam, linkepic: jogos["RedDead2"].linkepic, caminhoImagem: jogos["RedDead2"].caminhoImagem},
    {nome: "GOD OF WAR: RAGNARöK", traducao: jogos["GOWRG"].traducao, descricao:jogos["GOWRG"].descricao, sinopse: jogos["GOWRG"].sinopse, linksteam: jogos["GOWRG"].linksteam, linkepic: jogos["GOWRG"].linkepic, caminhoImagem: jogos["GOWRG"].caminhoImagem },
    {nome: "GTA V", traducao: jogos["gtav"].traducao, descricao: jogos["gtav"].descricao, sinopse: jogos["gtav"].sinopse, linksteam: jogos["gtav"].linksteam, linkepic: jogos["gtav"].linkepic, caminhoImagem: jogos["gtav"].caminhoImagem },
    {nome: "ELDEN RING", traducao: jogos["eldenring"].traducao, descricao: jogos["eldenring"].descricao, sinopse: jogos["eldenring"].sinopse, linksteam: jogos["eldenring"].linksteam,  caminhoImagem: jogos["eldenring"].caminhoImagem},
    {nome: "CS:GO 2", traducao: jogos["csgo2"].traducao, descricao: jogos["csgo2"].descricao, sinopse: jogos["csgo2"].sinopse, linksteam: jogos["csgo2"].linksteam, caminhoImagem:jogos["csgo2"].caminhoImagem},
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
            linksteam={jogos.linksteam}
            linkepic={jogos.linkepic}
            caminhoImagem={jogos.caminhoImagem}
          />
        ))
      }
    </section>
    
    
    </>

  )

}

export default App
