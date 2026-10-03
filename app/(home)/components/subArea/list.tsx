import { GetSubs } from "@/utils/getSub"
import Card from "./card"

const data = await GetSubs()

const List = () => {
    return (
        <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-4 md:justify-center">
            {
                data && (
                    data.map((item, index) => (
                        <Card key={index} title={item.title} desc={item.desc} icon={item.icon} />
                    ))
                )
            }
        </div>
    )
}
export default List