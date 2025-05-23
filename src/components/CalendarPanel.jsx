import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useTaskStore } from '../store/tasks'
import '../styles/calendar.css'


export default function CalendarPanel() {
  const { selectedDate, setDate } = useTaskStore()

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-center">Calendário</h2>
      <Calendar
        onChange={setDate}
        value={selectedDate}
        className="rounded-lg border dark:border-gray-700 center mx-auto"
      />
    </div>
  )
}
