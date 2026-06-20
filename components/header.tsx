export default function Header() {
    return (
            <main className={bodyStyle}>
                <h1>SWARM 79</h1>

                <div>
                    <ul className="flex row">
                        <li className="m-2">
                            <a className="hover:text-red-500">Sobre nós</a>
                        </li>
                        <li className="m-2">
                            <a className="hover:text-red-500">Sub-áreas</a>
                        </li>
                        <li className="m-2">
                            <a className="hover:text-red-500">Noticias</a>
                        </li>
                        <li className="m-2 ">
                            <a className="hover:text-red-500">Competições</a>
                        </li>
                    </ul>
                </div>
            </main>
    );
}

const bodyStyle = "flex row justify-between px-5 items-center py-3 bg-gradient-to-b from-[#1E1D1C] from-[16%] to-[#1E1D1C]/60 fixed w-full"