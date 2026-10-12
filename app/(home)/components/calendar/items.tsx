import { CalendarEvent } from "@/types/calendarEvent"
import DefineStatus from "@/utils/defineStatus"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"


const Items = ({title, status, startDate, endDate, resume}: CalendarEvent) => {
    const startDay = format(startDate, "dd")
    const endDay = format(endDate, "d")
    const month = format(startDate, "MMMM", { locale: ptBR })
    return(
        <div className="flex justify-between px-5 py-5 items-center relative w-full bg-[#1e1d1c] h-[95px] rounded-xl mb-3 cursor-pointer">
            <div className="flex flex-col items-center">
                <p className="text-[#d72229] text-[20px] font-bold">{startDay}</p>
                <p>{month}</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-[#d72229] text-[18px] font-bold">{title}</p>
                <p>{resume}</p>
            </div>

            <div className="hidden md:block bg-[#c8102e1f] rounded-full px-2 py-1">
                <p className="text-[#D72229]">{DefineStatus(status)}</p>
            </div>
        </div>
    )
}

export default Items