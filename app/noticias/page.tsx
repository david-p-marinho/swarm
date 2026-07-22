import Header from "@/components/header";
import List from "./components/list";
import HighLight from "./components/highLight";

export default function News() {
    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center mt-15">
                <div className="w-full bg-[#161616] flex flex-col justify-between items-center py-10 mb-10">
                    <h1>Notícias</h1>
                </div>

                <HighLight/>

                <List />
            </div>

        </div>
    )
}