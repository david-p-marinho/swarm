export default function Header() {
    return (
            <main className="flex row justify-between px-5 items-center py-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.52)', position: 'fixed', width: '100%'}}>
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


