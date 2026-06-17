import { GetCalendar, CalendarItems } from "@/utils/getCalendar"
import Items from "./items"

const data = await GetCalendar()

const List = () => {
    return(
        <ul className="w-full pb-10">
            <li className="w-full">
                {
                    data && (
                        data.map((item) => (
                            <Items title={item.title} status={item.status}/>
                        ))
                    )
                }
            </li>
        </ul>
    )
}
export default List