import { GetSubs } from "@/utils/getSub"
import Card from "./card"

const data = await GetSubs()

const List = () => {
    return (
        <div className="flex">
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