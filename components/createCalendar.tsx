'use client'

import { useState } from "react"
import { addMonths, format, subMonths, endOfMonth, startOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { GetCalendar } from "@/utils/getCalendar"
import { CalendarEvent } from "@/types/calendarEvent"

const CreateCalendar = ({events}: {events: CalendarEvent[]}) => {
   const [currentMonth, setCurrentMonth] = useState(new Date())
   const [today, setToday] = useState(new Date())
   


   const monthStart = startOfMonth(currentMonth)
   const monthEnd = endOfMonth(currentMonth)
   const weekStart = startOfWeek(monthStart)
   const weekEnd = endOfWeek(monthEnd)

   const days = eachDayOfInterval({ start: weekStart, end: weekEnd })
   const weekLabel = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

   return (
      <div className="w-full h-full p-4 bg-[#1e1d1c] rounded-xl shadow-md">
         <div className="flex items-center justify-between mb-4 text-white">
            <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 cursor-pointer"><RiArrowLeftSLine /></button>
            <h2 className="font-bold capitalize"> {format(currentMonth, 'MMMM yyyy', { locale: ptBR })} </h2>
            <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 cursor-pointer"><RiArrowRightSLine /></button>

         </div>

         <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
            {weekLabel.map((label, index) => (
               <div key={index}>{label}</div>
            ))}
         </div>

         <div className="grid grid-cols-7 gap-3">
            {days.map((day) => {
               const sameMonth = isSameMonth(day, currentMonth);
               const isToday = isSameDay(day, today);

               return (
                  <button
                     key={day.toString()}
                     className={`
                h-8 rounded-md text-[15px] font-medium relative
                ${!sameMonth ? 'text-gray-700' : 'text-white'}
                ${isToday && '!border-[#d72229] border'}
              `}

                  >
                     {
                        events.some(event => isSameDay(day, event.startDate) || isSameDay(day, event.endDate)) && (
                           <div className="rounded-full bg-[#d72229] w-[10px] h-[10px] absolute left-1/2 -translate-x-1/2 top-[-5px]" />
                        )
                     }   
                     {format(day, 'd')}
                  </button>
               );
            })}
         </div>
      </div>
   )
}

export default CreateCalendar