import Image from "next/image"
import { News } from "@/types/news"

type highLightProps = Omit<News, 'id' | 'content' | 'content2' | 'timeStamp' | 'isHighLight'>

export default function HighLightCard({ tag, img, title, resume }: highLightProps) {
    return (
        <div className="w-[40dvw] p-2 cursor-pointer group">
            <div className="flex flex-col justify-between items-center">
                <div className="flex gap-2 w-full">
                    {
                        tag.map((tag, index) => (
                            <span key={index} className="bg-[#c8102e1f] text-[#D72229] text-[10px] px-2 py-1 rounded-md self-start mb-1 ">{tag}</span>
                        ))
                    }
                </div>

                <div className="overflow-hidden w-full aspect-video rounded-md relative">
                    <Image
                        src={img}
                        alt="Foto da equipe"
                        width={456}
                        height={422}
                        className="w-full h-full object-cover rounded-md mb-10 transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    />
                </div>

                <p className="font-bold text-[20px] tracking-[3px] group-hover:text-[#D72229] transition-colors duration-1000">{title}</p>
                <p className="group-hover:underline duration-1000">{resume}</p>
            </div>
        </div>
    )
}


