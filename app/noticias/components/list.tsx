import GetNews from "@/utils/getNews"
import ListItems from "./listItem"
import SortNews from "@/utils/sortNews"

const newsList = GetNews()

const List = () => {
    const sortedNews = SortNews(newsList)
    return (
        <div className=" w-full">
            <h2 className="mb-5 text-[30px] font-bold">Noticias recentes</h2>

            <div className="flex flex-col items-center w-full">
                {
                    sortedNews.map((news, index) => (
                        <ListItems key={index} title={news.title} img={news.img} resume={news.resume} tag={news.tag} timeStamp={news.timeStamp} isHighLight={news.isHighLight} />
                    ))
                }
            </div>
        </div>
    )
}

export default List