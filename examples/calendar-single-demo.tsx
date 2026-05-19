"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

function CalendarSingleDemo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return <Calendar mode="single" selected={date} onSelect={setDate} />
}

export { CalendarSingleDemo }
