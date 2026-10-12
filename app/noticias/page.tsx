import Header from "@/components/header";
import HighLight from "./components/highLight";
import NewsList from "../../components/newsList";

export default function News() {
    return (
        <div>
            <Header/>
            <div className="flex flex-col mt-15 mx-10">
                <div className="w-full text-[#D72229] text-[40px] font-bold flex flex-col justify-between items-center py-10 mb-10">
                    <h1>Notícias</h1>
                </div>

                <div className="hidden md:block">
                    <HighLight/>
                </div>

                <NewsList/>
            </div>

        </div>
    )
}