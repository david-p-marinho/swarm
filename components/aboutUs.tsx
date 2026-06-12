import Image from "next/image";
import Link from "next/link";
import Title from "./title";

export default function AboutUs() {
    return (
        <section className="flex flex-col justify-center items-center mt-10" >
            <Title content="Quem somos"/>

            <div className="w-[900] h-[435] flex flex-col justify-between items-center rounded-md px-[1]" style={{borderWidth: '0.5px', borderColor: 'rgba(255,255,255,0.07'}}>
                <Image className="w-full h-[360px] object-cover rounded-t-md shadow-md" src={'/aboutUs.jpeg'} alt="Foto da equipe" height={360} width={900} objectFit="cover" />

                <div className="flex px-3 pb-3 justify-between w-full items-center">
                    <p className="text-base w-[700px]">
                        Swarm 79 é uma equipe de drones competitivos dedicada à inovação e alto desempenho. Com precisão, estratégia e tecnologia de ponta, buscamos dominar cada corrida e desafio técnico.
                    </p>
                    <Link className="bg-[#D72229] rounded-md px-3 py-2" href={'#'}>Saiba mais</Link>
                </div>
            </div>
        </section>
    )
}