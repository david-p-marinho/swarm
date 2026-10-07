import { GetSubs } from "@/utils/getSub"
import Card from "./card"

const data = await GetSubs()

const List = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-2 pb-4">
            {
                data && (
                    data.slice(0, -1).map((item, index) => (
                        <Card key={index} title={item.title} desc={item.desc} icon={item.icon} />
                    ))
                )
            }
        </div>
    )
}
export default List