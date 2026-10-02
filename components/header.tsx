import Link from "next/link"
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
    return (
            <main className={bodyStyle}>
                <Link className="flex items-center" href="/">
                    <Image src={'/logo.png'} alt="logo" width={40} height={40} />
                    <h1 className="text-[#d72229] ml-[5px] font-bold">SWARM 79</h1>
                </Link>

                <div className="hidden md:block">
                    <ul className="flex row">
                        <li className="m-2">
                            <Link href="/sobre" className="hover:text-red-500">Sobre nós</Link>
                        </li>
                        <li className="m-2">
                            <Link href="/" className="hover:text-red-500">Sub-áreas</Link>
                        </li>
                        <li className="m-2">
                            <Link href="/noticias" className="hover:text-red-500">Noticias</Link>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <RiMenuLine className="w-[24px] h-[24px]" />
                </div>
            </main>
    );
}

const bodyStyle = "flex row justify-between px-5 items-center py-3 bg-gradient-to-b from-[#1E1D1C] from-[16%] to-[#1E1D1C]/60 fixed w-full"