import Link from "next/link"

export default function Header() {
    return (
            <main className={bodyStyle}>
                <Link href="/">
                    <h1>SWARM 79</h1>
                </Link>

                <div>
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
                        <li className="m-2 ">
                            <Link href="/" className="hover:text-red-500">Competições</Link>
                        </li>
                    </ul>
                </div>
            </main>
    );
}

const bodyStyle = "flex row justify-between px-5 items-center py-3 bg-gradient-to-b from-[#1E1D1C] from-[16%] to-[#1E1D1C]/60 fixed w-full"