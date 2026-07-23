import Header from "@/components/header";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center mt-15 mx-10">

                    <h1 className="text-[#D72229] text-[40px] font-bold py-10 mb-10">Sobre nos</h1>
   

                <div className="flex justify-evenly w-full items-center">
                    <Image className="w-[593px] h-[400px] object-cover rounded-t-md" src={'/aboutUs.jpeg'} alt="Foto da equipe" height={422} width={456}  />

                    <p className="w-[544px] text-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
                </div>

                <div>
                    <h2 className="text-[#D72229] text-[34px] font-bold py-10 mb-10">Integrantes</h2>

                    
                </div>
            </main>

        </div>
    )
}