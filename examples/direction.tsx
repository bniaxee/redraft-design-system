import { DirectionToggleDemo } from "@/components/docs/examples/direction-interactive"

import { DirectionProvider } from "@/components/ui/direction"

const directionBasicCode = `import { DirectionProvider } from "@/components/ui/direction"

export function DirectionBasic() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-72 space-y-3 rounded-lg border p-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-muted" />
          <div>
            <p className="text-sm font-medium">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">alex@example.com</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Layout and text flow from right to left.
        </p>
      </div>
    </DirectionProvider>
  )
}`

function DirectionBasicDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-72 space-y-3 rounded-lg border p-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-muted" />
          <div>
            <p className="text-sm font-medium">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">alex@example.com</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Layout and text flow from right to left.
        </p>
      </div>
    </DirectionProvider>
  )
}

const directionScopedCode = `import { DirectionProvider } from "@/components/ui/direction"

export function DirectionScoped() {
  return (
    <div className="w-72 space-y-3">
      <div className="rounded-lg border p-4">
        <p className="text-sm font-medium">English content</p>
        <p className="text-sm text-muted-foreground">Left-to-right layout.</p>
      </div>
      <DirectionProvider dir="rtl">
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">محتوى عربي</p>
          <p className="text-sm text-muted-foreground">من اليمين إلى اليسار</p>
        </div>
      </DirectionProvider>
    </div>
  )
}`

function DirectionScopedDemo() {
  return (
    <div className="w-72 space-y-3">
      <div className="rounded-lg border p-4">
        <p className="text-sm font-medium">English content</p>
        <p className="text-sm text-muted-foreground">Left-to-right layout.</p>
      </div>
      <DirectionProvider dir="rtl">
        <div className="rounded-lg border p-4">
          <p className="text-sm font-medium">محتوى عربي</p>
          <p className="text-sm text-muted-foreground">من اليمين إلى اليسار</p>
        </div>
      </DirectionProvider>
    </div>
  )
}

const directionToggleCode = `"use client"

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

export function DirectionToggle() {
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
}`

export {
  DirectionBasicDemo,
  DirectionScopedDemo,
  DirectionToggleDemo,
  directionBasicCode,
  directionScopedCode,
  directionToggleCode,
}
