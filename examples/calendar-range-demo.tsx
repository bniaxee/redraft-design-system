"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

function CalendarRangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>()

  return <Calendar mode="range" selected={range} onSelect={setRange} />
}

export { CalendarRangeDemo }
