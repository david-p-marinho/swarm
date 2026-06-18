export default function Header() {
    return (
            <main className="flex row justify-between px-5 items-center py-3 bg-[linear-gradient(0deg,_#1E1D1C96_0%,_#1E1D1C_84.13%)] fixed w-full">
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