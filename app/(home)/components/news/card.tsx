import { News } from "@/types/news"
import Image from "next/image"
import Link from "next/link"

type news = Omit<News, 'content'|'tag'|'timeStamp'>

const Card = ({ title, resume, img}: news) => {
    return (
        <Link href="#" className="group border-1 border-[#ffffff12] rounded-md flex justify-between w-full mb-5">
            <div className="p-5 flex">
                <Image className="rounded-md me-[20px]" src={img} alt="" width={230} height={155} />
                <div>
                    <p className="text-[#D72229] mb-2" style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</p>
                    <p style={{ fontSize: 14 }}>{resume}</p>
                </div>
            </div>

            <div className="self-end  mb-2 me-2 flex items-center">
                <p className="group-hover:text-red-400 transition-colors duration-200 text-[10px] mr-1">Ver Mais</p>
                {/* @ts-ignore */}
                <ion-icon className="text-white group-hover:text-red-400 transition-colors duration-200" name="arrow-forward"></ion-icon>
            </div>
        </Link>
    )
}

export default Card