import Image from "next/image"
import { News } from "@/types/news"

type highLightProps = Omit<News, 'id'| 'content' | 'content2' | 'timeStamp' | 'isHighLight'>

export default function HighLightCard({ tag, img, title, resume }: highLightProps) {
    return (
        <div className="w-[600px] p-2 cursor-pointer group">
            <div className="flex flex-col justify-between items-center">
                <div className="flex gap-2 w-full">
                    {
                        tag.map((tag, index) => (
                            <span key={index} className="bg-[#c8102e1f] text-[#D72229] text-[10px] px-2 py-1 rounded-md self-start mb-1 ">{tag}</span>
                        ))
                    }
                </div>
                
                <div className="overflow-hidden w-[600px] h-[360px] rounded-md">
                    <Image className="w-full h-[360px] object-cover rounded-md mb-10 transition-transform duration-1000 ease-in-out group-hover:scale-110" src={img} alt="Foto da equipe" height={422} width={456} objectFit="cover" />
                </div>

                <p className="text-[18px] font-bold group-hover:text-[#D72229] transition-colors duration-1000">{title}</p>
                <p className="group-hover:underline duration-1000">{resume}</p>
            </div>
        </div>
    )
}


