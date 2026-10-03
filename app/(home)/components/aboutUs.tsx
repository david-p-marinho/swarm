import Image from "next/image";
import Link from "next/link";
import Title from "../../../components/title";

export default function AboutUs() {
    return (
        <section className="flex flex-col justify-center items-center py-[70px] w-[90%] lg:w-[900px] " >
            <Title content="Quem somos"/>

            <div className={cardStyle}>
                <Image className="w-full h-[360px] object-cover rounded-t-md" src={'/aboutUs.jpeg'} alt="Foto da equipe" height={360} width={200} objectFit="cover" />

                <div className="flex px-3 my-4  justify-between w-full items-center">
                    <p className="text-base w-[700px]">
                        Swarm 79 é uma equipe de drones competitivos dedicada à inovação e alto desempenho. Com precisão, estratégia e tecnologia de ponta, buscamos dominar cada corrida e desafio técnico.
                    </p>
                    <Link className="bg-[#D72229] rounded-md px-3 py-2" href={'#'}>Saiba mais</Link>
                </div>
            </div>
        </section>
    )
}

const cardStyle = "w-full h-fit flex flex-col items-center rounded-md px-[1] border-[1px] border-[#FFFFFF12] shadow-md"