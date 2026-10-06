'use client'

import Link from "next/link"
import Image from "next/image";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import MenuItems from "./menuItems";
import { useState } from "react";

export default function Header() {
    const [active, setActive] = useState(false)

    const style = {
        container: `${active ? "max-h-[300px]": "max-h-[64px]"} w-[80dvw] shadow-xl rounded-md bg-[#3D3E45] overflow-hidden transition-all duration-500 ease-in-out md:h-[64px]`, 
        colapsed: 'flex row justify-between px-5 py-3 items-center',
        expanded: `  md:hidden`
    } 

    return (
        <div className='w-full flex justify-center absolute top-5 fixed  z-20'>
            <main className={style.container}>
                <div className={style.colapsed}>
                    <Link className="flex items-center" href="/">
                        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
                        <h1 className="text-[#d72229] ml-[5px] font-bold">SWARM 79</h1>
                    </Link>

                    <div className="hidden md:block">
                        <MenuItems containerStyle={"flex gap-4"} itemStyle={""} isMobile={false} />
                    </div>

                    <div className={`transition-transform duration-300 ease-in-out md:hidden ${active ? 'rotate-180': 'rotate-0'}`} onClick={() => setActive(!active)}>
                        {
                            active ? 
                            (
                                <RiCloseLine className="w-[24px] h-[24px]" />
                            ): 
                            (
                                <RiMenuLine className="w-[24px] h-[24px]" />
                            )
                        }

                    </div>
                </div>

                <div className={style.expanded}>
                    <MenuItems containerStyle={"flex flex-col items-center h-full divide-y divide-white"} itemStyle={"py-4 w-full text-center"} isMobile={true}/>
                </div>
            </main>
        </div>
    );
}