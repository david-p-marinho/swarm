import Image from "next/image";
import HeroList from "./heroList";

const Hero = () => {
    return(
        <div className="flex flex-col items-center pt-30" style={{ width: '100%', height: '100vh', backgroundImage: "url('/heroBg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <Image src={'/logo.png'} alt="logo" width={120} height={120} />
          <h1 style={{ fontSize: 'clamp(42px, 8vw, 72px)', fontFamily: 'var(--font-bebas), sans-serif', color: '#D72229' }}>EQUIPE SWARM 79</h1>
          <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Universidade Federal de Sergipe · Grupo de Estudos, Pesquisa e Inovação</p>

          <HeroList/>
        </div>
    )
}

export default Hero