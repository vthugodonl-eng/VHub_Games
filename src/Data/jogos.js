import reddeadredemption2Imagem from "../assets/reddead2.webp"
import gowrgImagem from "../assets/gowrg.webp"
import gtavImagem from "../assets/gtav.webp"
import eldenringImagem from "../assets/eldenring.webp"
import csgo2Imagem from "../assets/csgo2.webp"
import fortniteImagem from '../assets/FORTINITE.webp'
import rocketleagueImagem from '../assets/rocketleague.webp'
import overwatch2Imagem from '../assets/overwatch2.webp'
import warzoneImagem from '../assets/warzone.webp'
import dota2Imagem from '../assets/dota2.webp'
import forza5Imagem from '../assets/forzahorizon5.webp'
import hogwartslegacyImagem from '../assets/hogwatslegacy.webp'

const jogos =[
    {
    id: 1,
    nome: "RED DEAD REDEMPTION 2",
    traducao: "BRA, ENG, ESP",
    descricao: "Jogo Mundo Aberto, Acão, Historia",
    categoria: ["Jogo Mundo Aberto", "Acão", "Historia"],
    sinopse: "Red Dead Redemption 2 é um jogo de ação e aventura que se passa em 1899, seguindo a história de Arthur Morgan, um membro da gangue Van der Linde, enquanto eles lutam pela sobrevivência em um mundo em declínio.",    
    linksteam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    linkepic: "https://store.epicgames.com/p/red-dead-redemption-2",
    caminhoImagem: reddeadredemption2Imagem
    },

    {
        id: 2,
        nome: "GOD OF WAR: RAGNARöK",
        traducao: "BRA, ENG",
        descricao: "Acão, Historia",
        categoria: ["Acão", "Historia"],
        sinopse: "God of War Ragnarök acompanha Kratos e Atreus alguns anos após os acontecimentos de God of War (2018). O Fimbulwinter — o inverno que antecede o Ragnarök — já começou, e os dois precisam viajar pelos Nove Reinos em busca de respostas enquanto enfrentam criaturas míticas, deuses nórdicos e a ameaça do fim do mundo.",
        linksteam: "https://store.steampowered.com/app/2322010/God_of_War_Ragnark/",
        linkepic: "https://store.epicgames.com/p/god-of-war-ragnarok-3ca641",
        caminhoImagem: gowrgImagem
    },

    {
        id: 3,
        nome: "GTA V",
        traducao: "ENG, ESP",
        descricao: "Jogo Mundo Aberto, Acão",
        categoria: ["Jogo Mundo Aberto", "Acão"],
        sinopse: "Grand Theft Auto V acompanha Michael, Franklin e Trevor, três criminosos que unem forças para realizar grandes assaltos em Los Santos enquanto enfrentam gangues, corrupção e o caos do mundo do crime.",
        linksteam: "https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/",
        linkepic: "https://store.epicgames.com/p/grand-theft-auto-v",
        caminhoImagem: gtavImagem
    },

    {
        id: 4,
        nome: "ELDEN RING",
        traducao: "ENG",
        descricao: "Jogo Mundo Aberto, RPG",
        categoria: ["Jogo Mundo Aberto", "RPG"],
        sinopse: "Elden Ring é um RPG de fantasia sombria onde o jogador explora as Terras Intermédias em busca dos fragmentos do Elden Ring para se tornar o novo Lorde Prístino, enfrentando criaturas poderosas e grandes desafios pelo caminho.",
        linksteam: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
        caminhoImagem: eldenringImagem
    },

    {
        id: 5,
        nome: "CS:GO 2",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, Tiro",
        categoria: ["Jogo Competitivo Online", "Tiro"],
        sinopse: "Counter-Strike: Global Offensive é um jogo de tiro competitivo em equipe onde terroristas e contra-terroristas se enfrentam em partidas estratégicas envolvendo bombas, resgates e intensa ação multiplayer.",
        linksteam: "https://store.steampowered.com/app/730/CounterStrike_2/",
        caminhoImagem: csgo2Imagem
    },

    {
        id: 6,
        nome: "Fortnite",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, Tiro",
        categoria: ["Jogo Competitivo Online", "Tiro"],
        sinopse: "Fortnite é um jogo de batalha real onde 100 jogadores competem para ser o último sobrevivente em uma ilha cheia de ação e construções.",
        linkepic: "https://store.epicgames.com/p/fortnite?lang=pt-BR",
        caminhoImagem: fortniteImagem
    },

    {
        id: 7,
        nome: "Rocket League",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, Carros",
        categoria: ["Jogo Competitivo Online", "Carros"],
        sinopse: "Rocket League mistura futebol e carros em partidas rápidas e competitivas, onde habilidade e trabalho em equipe são essenciais para vencer.",
        linkepic: "https://store.epicgames.com/p/rocket-league?lang=pt-BR",
        caminhoImagem: rocketleagueImagem
    },

    {
        id: 8,
        nome: "Overwatch 2",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, Tiro",
        categoria: ["Jogo Competitivo Online", "Tiro"],
        sinopse: "Overwatch 2 é um jogo de tiro em equipe onde heróis com habilidades únicas se enfrentam em batalhas rápidas e estratégicas.",
        linksteam: "https://store.steampowered.com/app/2357570/Overwatch/",
        caminhoImagem: overwatch2Imagem
    },

    {
        id: 9,
        nome: "Call of Duty: Warzone",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, Tiro",
        categoria: ["Jogo Competitivo Online", "Tiro"],
        sinopse: "Call of Duty: Warzone é um battle royale gratuito que coloca dezenas de jogadores em um enorme campo de batalha, onde o objetivo é sobreviver até o fim. Os jogadores podem explorar o mapa, coletar armas, equipamentos e dinheiro, cumprir contratos e enfrentar equipes rivais enquanto uma zona de gás se fecha gradualmente, forçando os confrontos. Com partidas intensas, modos em equipe e atualizações frequentes, Warzone combina ação rápida, estratégia e trabalho em equipe em uma experiência competitiva e dinâmica. 🎮🔥",
        linksteam: "https://store.steampowered.com/app/1962663/Call_of_Duty_Warzone/",
        caminhoImagem: warzoneImagem
    },
    
    {
        id: 10,
        nome: "DOTA 2",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Jogo Competitivo Online, RPG",
        categoria: ["Jogo Competitivo Online", "RPG"],
        sinopse: "Dota 2 é um jogo de estratégia e ação online no qual duas equipes de cinco jogadores se enfrentam para destruir a base adversária, conhecida como Ancient. Cada jogador controla um herói com habilidades únicas e deve trabalhar em equipe para derrotar inimigos, conquistar objetivos e ganhar vantagem no mapa. Com centenas de heróis, partidas dinâmicas e um cenário competitivo mundial, Dota 2 exige estratégia, coordenação e tomada de decisões rápidas para alcançar a vitória. ⚔️🏆🎮",
        linksteam: "https://store.steampowered.com/app/570/Dota_2/",
        caminhoImagem: dota2Imagem
    },

    {
        id: 11,
        nome: "Forza Horizon 5",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "Corrida, Jogo Competitivo Online",
        categoria: ["Corrida", "Jogo Competitivo Online"],
        sinopse: "Forza Horizon 5 é um jogo de corrida em mundo aberto ambientado no México, oferecendo uma grande variedade de paisagens, desde desertos e florestas até cidades e praias. Os jogadores podem explorar livremente o mapa, participar de corridas, desafios e eventos especiais, além de colecionar e personalizar centenas de veículos. Com gráficos impressionantes, clima dinâmico e modos online, Forza Horizon 5 proporciona uma experiência de corrida divertida e acessível para todos os tipos de jogadores. 🚗🌵🏁",
        linksteam: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
        caminhoImagem: forza5Imagem
    },
    
    {
        id: 12,
        nome: "Hogwarts Legacy",
        traducao: "ENG, BRA, ESP, JAN",
        descricao: "RPG, Acão, Historia",
        categoria: ["RPG", "Acão", "Historia"],
        sinopse: "Hogwarts Legacy é um RPG de ação ambientado no universo de Harry Potter, mas situado no século XIX, muito antes dos eventos dos livros. O jogador assume o papel de um estudante de Hogwarts que possui uma rara habilidade ligada à magia antiga. Durante a jornada, é possível explorar livremente o castelo, aprender feitiços, criar poções, enfrentar criaturas mágicas e desvendar mistérios que ameaçam o mundo bruxo. Com um vasto mundo aberto e diversas escolhas, Hogwarts Legacy oferece uma experiência imersiva para os fãs de magia e aventura. 🧙‍♂️✨🏰",
        linksteam: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
        linkepic: "https://store.epicgames.com/p/hogwarts-legacy?lang=pt-BR",
        caminhoImagem: hogwartslegacyImagem
    }

]


export default jogos;