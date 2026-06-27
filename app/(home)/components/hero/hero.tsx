import Image from "next/image";
import HeroList from "./heroList";

const Hero = () => {
    return (
        <div className="flex flex-col items-center pt-30 bg-[url('/heroBg.png')] bg-cover bg-center w-full h-[100vh] bg-no-repeat">
            <Image src={'/logo.png'} alt="logo" width={120} height={120} />
            <h1 className="text-[clamp(42px,8vw,72px)] font-['Bebas_Neue',_sans-serif] text-[#D72229]">EQUIPE SWARM 79</h1>
            <p className="text-[10px] tracking-[3px] uppercase">
                Universidade Federal de Sergipe · Grupo de Estudos, Pesquisa e Inovação
            </p>
            <HeroList />
        </div>
    )
}

export default Hero