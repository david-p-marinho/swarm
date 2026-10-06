import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

type news = Omit<News, 'content' | 'isHighLight' | 'content2'>

const ListItems = ({ title, img, resume, tag, timeStamp, id }: news) => {
    return (
        <Link className="group w-full flex flex-col border-b-1 border-b-[#3B3A38] py-10" href={`/noticias/${id}`}>
            <div className="flex gap-2 w-full">
                {
                    tag.map((tag, index) => (
                        <span key={index} className="bg-[#c8102e1f] text-[#D72229] text-[10px] px-2 py-1 rounded-md self-start mb-1 ">{tag}</span>
                    ))
                }
            </div>
            <div className="relative">
                <div className="flex flex-col md:flex-row">
                    <div className="overflow-hidden w-full max-w-[350px] min-w-[200px]">
                        <Image className="aspect-video w-full transition-transform duration-1000 ease-in-out group-hover:scale-110" src={img} alt={title} width={300} height={200} />
                    </div>

                    <div className="ml-5">
                        <h2 className="font-bold text-center md:text-start text-[20px] tracking-[3px] group-hover:text-[#D72229] transition-colors duration-1000" style={{ fontFamily: 'var(--font-dm-sans)' }}>{title}</h2>
                        <p className="text-[10px]">{timeStamp}</p>
                        <p className="text-[16px] group-hover:underline duration-1000">{resume}</p>
                    </div>
                </div>

                <div className="hidden md:flex absolute right-3 items-center gap-2">
                    <p className="group-hover:text-[#D72229] transition-colors duration-1000">Ler mais</p>
                    <RiArrowRightLine className="group-hover:text-[#D72229] transition-colors duration-1000" />
                </div>
            </div>
        </Link>
    )
}

export default ListItems