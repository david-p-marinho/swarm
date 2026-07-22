import GetNews from "@/utils/getNews"
import ListItems from "./listItem"
import SortNews from "@/utils/sortNews"
import Image from "next/image"

const newsList = GetNews()

const HighLight = () => {
    const highLightList = newsList.filter((news) => news.isHighLight)
    const sortedNews = SortNews(highLightList)

    if (sortedNews.length > 0) {
        return (
            <div className="grid grid-cols-3 gap-4 mx-10">
                <div className="col-span-2 p-2 bg-[#2D2C2A] rounded-md">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col justify-between items-center">
                            <p>{sortedNews[0].title}</p>
                            <p>{sortedNews[0].resume}</p>
                            <div className="flex justify-end w-full">
                                <p className="text-[#D72229]">ver mais</p>
                            </div>
                        </div>

                        <Image className="w-full h-[360px] object-cover rounded-t-md" src={sortedNews[0].img} alt="Foto da equipe" height={422} width={456} objectFit="cover" />
                    </div>

                </div>

                {
                    sortedNews.length > 1 &&
                    (
                        <div className="bg-[#2D2C2A] rounded-md flex flex-col items-center justify-center p-2">
                            <Image className="w-full h-[360px] object-cover rounded-t-md" src={sortedNews[1].img} alt="Foto da equipe" height={422} width={456} objectFit="cover" />
                            <p>{sortedNews[1].title}</p>
                            <p>{sortedNews[1].resume}</p>

                            <div className="flex justify-end w-full">
                                <p className="text-[#D72229]">ver mais</p>
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
    return


}

export default HighLight