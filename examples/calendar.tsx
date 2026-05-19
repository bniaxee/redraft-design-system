import { CalendarDropdownDemo } from "@/components/docs/examples/calendar-dropdown-demo"
import { CalendarRangeDemo } from "@/components/docs/examples/calendar-range-demo"
import { CalendarSingleDemo } from "@/components/docs/examples/calendar-single-demo"

const calendarSingleCode = `"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarSingle() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}`

const calendarRangeCode = `"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

export function CalendarRange() {
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
    />
  )
}`

const calendarDropdownCode = `"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDropdown() {
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
}`

export {
  CalendarSingleDemo,
  CalendarRangeDemo,
  CalendarDropdownDemo,
  calendarSingleCode,
  calendarRangeCode,
  calendarDropdownCode,
}
