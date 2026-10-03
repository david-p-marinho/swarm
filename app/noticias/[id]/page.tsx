// noticias/[id]/page.tsx

import Header from "@/components/header";
import GetNews from "@/utils/getNews";
import Image from "next/image";

interface Props {
    params: Promise<{
        id: number;
    }>;
}

export default async function CompleteNews({ params }: Props) {
    const { id } = await params;
    const newsList = GetNews()
    const news = newsList.find(news => news.id == id)

    return (
        <div>
            <Header />
            <main className="flex flex-col items-center mt-15 mx-10">
                {
                    !news ? (
                        <>
                            <p>Carregando noticia</p>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center w-full mt-20 mb-5 justify-end">
                                { news.tag.map((tag) => (
                                    <p className="me-2 text-[#d72229] text-[12px]">{tag}</p>
                                ))
                                }
                            </div>
                            <div className="flex justify-center items-center bg-black w-full md:h-[600px] mb-10">
                                <Image className="w-full md:max-w-[60%] md:w-[60%] " src={news.img} alt="Foto da equipe" height={380} width={200} />
                            </div>
                            
                            <div className="flex justify-center align-center relative w-full">
                                <h1 className="font-bold text-[24px] text-[#d72229]">{news.title}</h1>
                                <p className="absolute left-2 text-[14px] hidden md:block">{news.timeStamp}</p>
                            </div>
                            <p>{news.resume}</p>

                            <div className="w-full mt-15">
                                <p className="text-[18px] space-y-4 leading-relaxed">{news.content}</p>
                            </div>
                            <div className="w-full mt-5 mb-10">
                                <p className="text-[18px] space-y-4 leading-relaxed">{news.content2}</p>
                            </div>
                        </>
                    )
                }
            </main>
        </div>
    );
}