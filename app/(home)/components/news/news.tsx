import GetNews from "@/utils/getNews"
import Title from "../../../../components/title"
import Card from "./card"

const newsList = GetNews()

const News = () => {
    return (
        <section className="flex flex-col items-center ">

            <Title content={"Noticias"} />

            <div className="flex flex-col w-[95%] items-center">
                {
                    newsList.map((news, index) => (
                        <Card key={index} title={news.title} img={news.img} resume={news.resume}  />
                    ))
                }

            </div>
        </section>
    )
}

export default News