import { News } from "@/types/news";
import Image from "next/image";

type news = Omit<News, 'content'>

const ListItems = ({ title, img, resume, tag, timeStamp }: news) => {
    return (
        <div className="group w-[50dvw] flex flex-col items-center justify-center border-b-1 border-b-[#ffffff12] py-10">
            <span className="bg-[#c8102e1f] text-[#D72229] text-[10px] px-2 py-1 rounded-md self-start mb-1 ">{tag}</span>

            <Image className="aspect-video w-full" src={img} alt={title} width={300} height={200} />

            <div className="self-start">
                <h2 className="font-bold text-[20px] tracking-[3px] " style={{ fontFamily: 'var(--font-dm-sans)' }}>{title}</h2>
                <p className="text-[10px]">{timeStamp}</p>
                <p className="text-[16px]">{resume}</p>

            </div>
            
            <div className="self-end">
                <p className="group-hover:text-red-400 transition-colors duration-200">Ler mais</p>
            </div>
        </div>
    )
}

export default ListItems