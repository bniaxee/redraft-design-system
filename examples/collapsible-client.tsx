"use client"

import * as React from "react"
import { ChevronsUpDownIcon, MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

// --- Controlled state demo ---
export function CollapsibleControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-80 flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Deploy #1042</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDownIcon />
            <span className="sr-only">Toggle details</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Success</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Branch</p>
          <p className="text-muted-foreground">main</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Duration</p>
          <p className="text-muted-foreground">2m 34s</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Triggered by</p>
          <p className="text-muted-foreground">push to main</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

// --- Advanced options demo ---
export function CollapsibleAdvancedOptionsDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full max-w-xs rounded-xl border bg-card p-4">
      <h4 className="mb-3 text-sm font-semibold">Image dimensions</h4>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-3"
      >
        <FieldGroup className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="width">Width</FieldLabel>
            <Input id="width" placeholder="1200" defaultValue={1200} />
          </Field>
          <Field>
            <FieldLabel htmlFor="height">Height</FieldLabel>
            <Input id="height" placeholder="630" defaultValue={630} />
          </Field>
        </FieldGroup>
        <CollapsibleContent className="flex flex-col gap-3">
          <FieldGroup className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="min-width">Min width</FieldLabel>
              <Input id="min-width" placeholder="320" defaultValue={320} />
            </Field>
            <Field>
              <FieldLabel htmlFor="min-height">Min height</FieldLabel>
              <Input id="min-height" placeholder="240" defaultValue={240} />
            </Field>
          </FieldGroup>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-fit gap-1.5 text-xs">
            {isOpen ? (
              <MinusIcon className="size-3" />
            ) : (
              <PlusIcon className="size-3" />
            )}
            {isOpen ? "Hide constraints" : "Show constraints"}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  )
}
