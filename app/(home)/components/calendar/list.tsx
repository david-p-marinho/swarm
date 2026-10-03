import { GetCalendar} from "@/utils/getCalendar"
import Items from "./items"
import { CalendarEvent } from "@/types/calendarEvent"

const List = ({events}: {events: CalendarEvent[]}) => {
    return(
        <div className="w-full pb-10">
                {
                    events && (
                        events.map((event, index) => (
                            <Items key={index} title={event.title} status={event.status} resume={event.resume} startDate={event.startDate} endDate={event.endDate}/>
                        ))
                    )
                }
        </div>
    )
}
export default List