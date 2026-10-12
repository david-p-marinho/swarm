import Image from "next/image";
import Link from "next/link";
import Title from "../../../components/title";

export default function AboutUs() {
    return (
        <section className="flex flex-col justify-center items-center py-[70px] " >
            <Title content="Quem somos"/>

            <div className={cardStyle}>
                <Image className="aspect-video w-full h-auto object-cover rounded-md" src={'/swarmImg3.webp'} alt="Foto da equipe" width={900} height={506} />

                <div className="flex flex-col h-full justify-evenly w-full items-center">
                    <p className="text-base w-[300px]">
                        Swarm 79 é uma equipe de drones competitivos dedicada à inovação e alto desempenho. Com precisão, estratégia e tecnologia de ponta, buscamos dominar cada corrida e desafio técnico.
                    </p>
                    <Link className="bg-[#D72229] rounded-md px-3 py-2" href={'/sobre'}>Saiba mais</Link>
                </div>
            </div>
        </section>
    )
}

const cardStyle = "w-[90dvw] md:w-full h-[400px] flex flex-col md:flex-row items-center gap-2 rounded-md bg-[#3D3E45] shadow-md p-5"