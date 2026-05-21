"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { DirectionProvider, useDirection } from "@/components/ui/direction"

function DirectionIndicator() {
  const dir = useDirection()
  return (
    <div className="rounded-md bg-muted px-3 py-2 text-sm">
      Direction: <span className="font-mono font-medium">{dir}</span>
    </div>
  )
}

export function DirectionToggleDemo() {
  const [dir, setDir] = React.useState<"ltr" | "rtl">("ltr")

  return (
    <DirectionProvider dir={dir}>
      <div className="flex w-64 flex-col gap-3 rounded-lg border p-4">
        <DirectionIndicator />
        <p className="text-sm">
          {dir === "rtl" ? "النص من اليمين إلى اليسار" : "Text flows left to right"}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDir((d) => (d === "ltr" ? "rtl" : "ltr"))}
        >
          Switch to {dir === "ltr" ? "RTL" : "LTR"}
        </Button>
      </div>
    </DirectionProvider>
  )
}
