import { GetCalendar, CalendarItems } from "@/utils/getCalendar"
import Items from "./items"

const data = await GetCalendar()

const List = () => {
    return(
        <div className="w-full pb-10">
                {
                    data && (
                        data.map((item, index) => (
                            <Items key={index} title={item.title} status={item.status}/>
                        ))
                    )
                }
        </div>
    )
}
export default List