import { News } from "@/types/news"
import Image from "next/image"

type news = Omit<News, 'content'|'tag'|'timeStamp'>

const Card = ({ title, resume, img}: news) => {
    return (
        <div className="group border-1 border-[#ffffff12] rounded-md flex justify-between w-full mb-5">
            <div className="p-5 flex">
                <Image className="rounded-md me-[20px]" src={img} alt="" width={230} height={155} />
                <div>
                    <p className="text-[#D72229] mb-2" style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</p>
                    <p style={{ fontSize: 14 }}>{resume}</p>
                </div>
            </div>

            <div className="self-end w-[50px] mb-2 me-2">
                <p className="group-hover:text-red-400 transition-colors duration-200 text-[10px]">Ver Mais</p>
            </div>
        </div>
    )
}

export default Card