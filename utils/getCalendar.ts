import { CalendarEvent } from "@/types/calendarEvent"
import { promises as fs } from "fs"
import path from "path"

export const GetCalendar = async() => {
    const pathJs = path.join(process.cwd(), 'data', 'calendar.json')
    const file = await fs.readFile(pathJs, 'utf8')

    return JSON.parse(file) as CalendarEvent[]
}