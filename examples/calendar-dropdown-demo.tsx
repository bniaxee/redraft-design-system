"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

function CalendarDropdownDemo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
    />
  )
}

export { CalendarDropdownDemo }
