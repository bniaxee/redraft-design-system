"use client"

import * as React from "react"

import { Field, FieldDescription, FieldTitle } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function SliderControlledDemo() {
  const [zoom, setZoom] = React.useState([100])

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-zoom">Zoom</Label>
        <span className="text-sm text-muted-foreground tabular-nums">
          {zoom[0]}%
        </span>
      </div>
      <Slider
        id="slider-zoom"
        value={zoom}
        onValueChange={setZoom}
        min={25}
        max={200}
        step={25}
      />
    </div>
  )
}

export function SliderFieldDemo() {
  const [size, setSize] = React.useState([16])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Font size</FieldTitle>
      <FieldDescription>
        Set the base font size (currently {size[0]}px).
      </FieldDescription>
      <Slider
        value={size}
        onValueChange={setSize}
        min={12}
        max={32}
        step={2}
        className="mt-2"
        aria-label="Font size"
      />
    </Field>
  )
}
