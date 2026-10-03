import Header from "@/components/header";
import List from "./components/list";
import HighLight from "./components/highLight";

export default function News() {
    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center mt-15 mx-10">
                <div className="w-full text-[#D72229] text-[40px] font-bold flex flex-col justify-between items-center py-10 mb-10">
                    <h1>Notícias</h1>
                </div>

                <HighLight/>

                <List />
            </div>

        </div>
    )
}