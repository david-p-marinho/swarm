import GetNews from "@/utils/getNews"
import Title from "../../../../components/title"
import Card from "./card"

const newsList = GetNews()

const News = () => {
    return (
        <section className="flex flex-col items-center py-[70px]">

            <Title content={"Noticias"} />

            <div className="flex flex-col w-[95%] items-center">
                {
                    newsList.map((news, index) => (
                        <Card key={index} title={news.title} img={news.img} resume={news.resume} isHighLight={news.isHighLight}  />
                    ))
                }

            </div>
        </section>
    )
}

export default News