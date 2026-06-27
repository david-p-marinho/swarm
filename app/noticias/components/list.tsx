import GetNews from "@/utils/getNews"
import ListItems from "./listItem"

const newsList = GetNews()

const List = () => {
    return (
        <div className="flex flex-col items-center">
            {
                newsList.map((news, index) => (
                    <ListItems key={index} title={news.title} img={news.img} resume={news.resume} tag={news.tag} timeStamp={news.timeStamp} />
                ))
            }
        </div>
    )
}

export default List