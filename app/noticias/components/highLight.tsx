import GetNews from "@/utils/getNews"
import ListItems from "../../../components/newsCard"
import SortNews from "@/utils/sortNews"
import Image from "next/image"
import HighLightCard from "./highLightCard"

const newsList = GetNews()

const HighLight = () => {
    const highLightList = newsList.filter((news) => news.isHighLight)
    const sortedNews = SortNews(highLightList)

    if (sortedNews.length > 0) {
        return (
            <div className="mb-10">
                <h2 className="mb-5 text-[24px] font-bold">Destaques</h2>
                <div className="grid grid-cols-2 gap-4">
                    {
                        sortedNews.map((news) => (
                            <HighLightCard key={news.id} title={news.title} img={news.img} resume={news.resume} tag={news.tag} />
                        ))
                    }
                </div>
            </div>
        )
    }
    return


}

export default HighLight