import { Slider } from "@/components/ui/slider"

import {
  SliderControlledDemo,
  SliderFieldDemo,
} from "@/components/docs/examples/slider-interactive"

const sliderDefaultCode = `import { Slider } from "@/components/ui/slider"

export function SliderDefault() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}`

function SliderDefaultDemo() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}

const sliderControlledCode = `"use client"

import * as React from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function SliderControlled() {
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
}`

const sliderRangeCode = `import { Slider } from "@/components/ui/slider"

export function SliderRange() {
  return (
    <div className="mx-auto grid w-full max-w-xs gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$0</span>
        <span>$1,000</span>
      </div>
      <Slider defaultValue={[200, 800]} min={0} max={1000} step={50} />
    </div>
  )
}`

function SliderRangeDemo() {
  return (
    <div className="mx-auto grid w-full max-w-xs gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>$0</span>
        <span>$1,000</span>
      </div>
      <Slider defaultValue={[200, 800]} min={0} max={1000} step={50} />
    </div>
  )
}

const sliderVerticalCode = `import { Slider } from "@/components/ui/slider"

export function SliderVertical() {
  return (
    <div className="flex items-end justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[80]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Bass</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[60]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Mid</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[45]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Treble</span>
      </div>
    </div>
  )
}`

function SliderVerticalDemo() {
  return (
    <div className="flex items-end justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[80]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Bass</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[60]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Mid</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider defaultValue={[45]} orientation="vertical" className="h-32" />
        <span className="text-xs text-muted-foreground">Treble</span>
      </div>
    </div>
  )
}

const sliderFieldCode = `"use client"

import * as React from "react"

import { Field, FieldDescription, FieldTitle } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function SliderField() {
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
}`

export {
  SliderDefaultDemo,
  SliderRangeDemo,
  SliderVerticalDemo,
  SliderControlledDemo,
  SliderFieldDemo,
  sliderDefaultCode,
  sliderControlledCode,
  sliderRangeCode,
  sliderVerticalCode,
  sliderFieldCode,
}
