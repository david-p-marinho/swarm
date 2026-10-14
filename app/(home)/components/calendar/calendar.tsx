import CreateCalendar from "@/components/createCalendar"
import Title from "../../../../components/title"
import List from "./list"
import { GetCalendar } from "@/utils/getCalendar"
import { CalendarEvent } from "@/types/calendarEvent"

const parseLocalDate = (dateString: string | Date) => {
    if (dateString instanceof Date) return dateString;
    const [year, month, day] = dateString.split('T')[0].split('-').map(Number);
    return new Date(year, month - 1, day);
}

const Calendar = async () => {
    const data = await GetCalendar()

    const events: CalendarEvent[] = data.map(item => ({
        ...item,
        startDate: parseLocalDate(item.startDate),
        endDate: parseLocalDate(item.endDate),
    }));

    return (
        <section className="flex flex-col items-center bg-[#3D3E45] py-10 w-full">
            <Title content={"Calendario"} />

            <div className="flex flex-cols md:grid md:grid-cols-[repeat(2,auto)] gap-x-4">
                <div className="w-[300px] h-[350px] hidden md:block">
                    <CreateCalendar events={events} />
                </div>

                <div className="flex flex-col w-[90dvw] md:w-[600px] items-center">
                    <List events={events} />
                </div>
            </div>
        </section>
    )
}

export default Calendar