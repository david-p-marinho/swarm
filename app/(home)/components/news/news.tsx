import GetNews from "@/utils/getNews"
import Title from "../../../../components/title"
import NewsCard from "@/components/newsCard"
import Link from "next/link"
import { RiArrowRightLine } from "react-icons/ri"

const newsList = GetNews()

const News = () => {
    return (
        <section className="flex flex-col items-center py-[70px]">

            <Title content={"Noticias"} />

            <div className="flex flex-col items-center w-full mb-[30px]">
                {
                    newsList.slice(0, 2).map((news) => (
                        <NewsCard key={news.id} id={news.id} title={news.title} img={news.img} resume={news.resume} tag={news.tag} timeStamp={news.timeStamp}/>
                    ))
                }

            </div>

            <Link className="flex items-center justify-center bg-[#D72229] px-3 py-2 rounded-md shadow-md" href={""}>
                <p>ir para noticias</p>
                <RiArrowRightLine />
            </Link>
        </section>
    )
}

export default News