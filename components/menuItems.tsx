import Link from "next/link";

export default function MenuItems({ containerStyle, itemStyle, isMobile }: { containerStyle: string, itemStyle: string, isMobile: boolean }) {
    return (
        <ul className={containerStyle}>
            {
                isMobile && (
                    <li className={itemStyle + ' md:hidden'}>
                        <Link href="/" className="hover:text-red-500">Inicio</Link>
                    </li>
                )
            }
            <li className={itemStyle}>
                <Link href="/sobre" className="hover:text-red-500">Sobre nós</Link>
            </li>
            <li className={itemStyle}>
                <Link href="/" className="hover:text-red-500">Sub-áreas</Link>
            </li>
            <li className={itemStyle}>
                <Link href="/noticias" className="hover:text-red-500">Noticias</Link>
            </li>
        </ul>
    )
}