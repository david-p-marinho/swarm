import CreateCalendar from "@/components/createCalendar"
import Title from "../../../../components/title"
import List from "./list"
import { GetCalendar } from "@/utils/getCalendar"
import { parseISO } from "date-fns"
import { CalendarEvent } from "@/types/calendarEvent"

const Calendar = async () => {
    const data = await GetCalendar()

    const events: CalendarEvent[] = data.map(item => ({
        ...item,
        startDate: typeof item.startDate === 'string' ? parseISO(item.startDate) : item.startDate,
        endDate: typeof item.endDate === 'string' ? parseISO(item.endDate) : item.endDate,
    }));

    return (
        <section className="flex flex-col items-center bg-[#302F2D] py-10 w-full">

            <Title content={"Calendario"} />

            <div className="flex justify-evenly items-center w-[60%]">
                <div className="w-[300px] h-[350px]">
                    <CreateCalendar events={events} />
                </div>

                <div className="flex flex-col w-[60%] items-center">
                    <List events={events} />
                </div>
            </div>

        </section>
    )
}

export default Calendar