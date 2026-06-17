import { promises as fs } from "fs"
import path from "path"

export interface CalendarItems {
    title: string,
    status: string
}

export const GetCalendar = async() => {
    const pathJs = path.join(process.cwd(), 'data', 'calendar.json')
    const file = await fs.readFile(pathJs, 'utf8')

    return JSON.parse(file) as CalendarItems[]
}