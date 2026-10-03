import SubArea from "@/types/subArea"
import Link from "next/link"

const Card = ({title, desc, icon}: SubArea) => {
    return(
        <Link href="#" className="border border-[#1A1918] bg-[#242321] shadow-md rounded-md px-10 py-5 flex flex-col items-center justify-between w-[280px] h-[385px] group hover:border-[#8A161A] transition-all duration-300 hover:shadow-xl snap-center shrink-0">
            {/* @ts-ignore */}
            <ion-icon name={icon} className="w-[30px] h-[30px] text-[#D72229] "></ion-icon>
            <p className="text-[#D72229]" style={{fontSize: 16, fontWeight: 'bold'}}>{title}</p>
            <p className="h-[231px]" style={{fontSize: 14}}>{desc}</p>

            <div className="self-end invisible group-hover:visible flex items-center transition-all duration-100">
                <p className="mr-1 text-[#D72229]">Ver integrantes</p>
                {/* @ts-ignore */}
                <ion-icon className="text-[#D72229]" name="arrow-forward"></ion-icon>
            </div>
        </Link>
    )
}


export default Card