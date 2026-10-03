import Link from "next/link"
import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
    return (
        <div className="w-full flex justify-center my-3 absolute">
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
        </div>
    );
}

const bodyStyle = "flex row justify-between px-5 items-center py-3 bg-[#3D3E45] fixed w-[80%] rounded-full shadow-xl"