import Header from "@/components/header";
import Image from "next/image";
import TeamMembers from "./components/teamMembers";
import { GetSubs } from "@/utils/getSub";
import { GetMembers } from "@/utils/getMembers";

const areas = await GetSubs()
const [eletronica, marketing, mecanica, ti, gestao] = await GetMembers()

export default function About() {
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center mt-15 mx-10">
                <h1 className="text-[#D72229] text-[30px] font-bold py-10 mb-10">Sobre nos</h1>

                <div className="flex justify-center gap-4 w-full items-center mb-[100px]">
                    <Image className="aspect-video w-[40dvw] h-fit object-cover rounded-md" src={'/swarmImg4.webp'} alt="Foto da equipe" height={422} width={456}  />

                    <p className="w-[40dvw] text-[18px]">A Swarm 79 é um grupo de pesquisa e competição focado em robótica e sistemas aéreos não tripulados. Nascido no ecossistema universitário, o projeto une teoria e prática na construção, programação e otimização de drones autônomos. Nossa equipe é movida pela curiosidade científica e pelo desafio técnico, explorando áreas como engenharia mecatrônica, visão computacional e navegação autônoma para desenvolver soluções de ponta.</p>
                </div>

                <div className="flex justify-center gap-4 w-full items-center mb-35">
                    <p className="w-[40dvw] text-[18px]">Nosso foco é a aplicação prática e de alto rendimento. Atuamos diretamente no desenvolvimento de hardware, modelagem e inteligência a bordo, submetendo nossos drones a testes rigorosos e aos cenários exigentes de grandes competições regionais e nacionais. Na Swarm 79, combinamos pesquisa científica aplicada e trabalho em equipe para superar limites técnicos, validar hipóteses em voo real e elevar o nível da robótica aérea no Brasil.</p>
                        
                    <Image className="aspect-video w-[40dvw] h-fit object-cover rounded-md" src={'/swarmImg7.webp'} alt="Foto da equipe" height={422} width={456}  />
                </div>

                <div>
                    <h2 className="text-[#D72229] text-[30px] font-bold my-[15px]  text-center">Integrantes</h2>
                
                    <TeamMembers areas={areas} eletronica={eletronica} marketing={marketing} mecanica={mecanica} ti={ti} gestao={gestao}/>
                </div>
            </main>

        </div>
    )
}