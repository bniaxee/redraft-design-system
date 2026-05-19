import {
  ChartAxesDemo,
  ChartBasicDemo,
  ChartLegendDemo,
  ChartTooltipDemo,
} from "@/components/docs/examples/chart-client"

const chartBasicCode = `"use client"

import { Bar, BarChart } from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { source: "Search", visitors: 275 },
  { source: "Direct", visitors: 200 },
  { source: "Social", visitors: 187 },
  { source: "Referral", visitors: 173 },
  { source: "Email", visitors: 90 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBasic() {
  return (
    <div className="w-full max-w-xl">
      <ChartContainer config={chartConfig} className="aspect-auto h-[240px]">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}`

const chartAxesCode = `"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

const chartData = [
  { day: "Mon", opened: 24, resolved: 18 },
  { day: "Tue", opened: 32, resolved: 26 },
  { day: "Wed", opened: 28, resolved: 30 },
  { day: "Thu", opened: 35, resolved: 29 },
  { day: "Fri", opened: 22, resolved: 27 },
  { day: "Sat", opened: 14, resolved: 16 },
]

const chartConfig = {
  opened: {
    label: "Opened",
    color: "var(--chart-1)",
  },
  resolved: {
    label: "Resolved",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAxes() {
  return (
    <div className="w-full max-w-xl">
      <ChartContainer config={chartConfig} className="aspect-auto h-[240px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <Bar dataKey="opened" fill="var(--color-opened)" radius={4} />
          <Bar dataKey="resolved" fill="var(--color-resolved)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}`

const chartTooltipCode = `"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", latency: 42 },
  { month: "Feb", latency: 38 },
  { month: "Mar", latency: 44 },
  { month: "Apr", latency: 36 },
  { month: "May", latency: 31 },
  { month: "Jun", latency: 28 },
]

const chartConfig = {
  latency: {
    label: "Response time",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartTooltipExample() {
  return (
    <div className="w-full max-w-xl">
      <ChartContainer config={chartConfig} className="aspect-auto h-[240px]">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Line
            dataKey="latency"
            type="monotone"
            stroke="var(--color-latency)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}`

const chartLegendCode = `"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", newVisitors: 120, returning: 80 },
  { month: "Feb", newVisitors: 180, returning: 110 },
  { month: "Mar", newVisitors: 160, returning: 130 },
  { month: "Apr", newVisitors: 210, returning: 150 },
  { month: "May", newVisitors: 190, returning: 170 },
  { month: "Jun", newVisitors: 240, returning: 190 },
]

const chartConfig = {
  newVisitors: {
    label: "New visitors",
    color: "var(--chart-4)",
  },
  returning: {
    label: "Returning",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartLegendExample() {
  return (
    <div className="w-full max-w-xl">
      <ChartContainer config={chartConfig} className="aspect-auto h-[240px]">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{ left: 12, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            dataKey="newVisitors"
            type="natural"
            fill="var(--color-newVisitors)"
            fillOpacity={0.25}
            stroke="var(--color-newVisitors)"
          />
          <Area
            dataKey="returning"
            type="natural"
            fill="var(--color-returning)"
            fillOpacity={0.25}
            stroke="var(--color-returning)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}`

export {
  ChartAxesDemo,
  ChartBasicDemo,
  ChartLegendDemo,
  ChartTooltipDemo,
  chartAxesCode,
  chartBasicCode,
  chartLegendCode,
  chartTooltipCode,
}
