import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

// ── Basic ────────────────────────────────────────────────────────────────────

const popoverBasicCode = `import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Release notes</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Version 2.4.0</PopoverTitle>
          <PopoverDescription>
            Improved rendering performance, dark mode fixes, and new component
            variants across the design system.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`

function PopoverBasicDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Release notes</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Version 2.4.0</PopoverTitle>
          <PopoverDescription>
            Improved rendering performance, dark mode fixes, and new component
            variants across the design system.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

// ── With form ────────────────────────────────────────────────────────────────

const popoverFormCode = `import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverFormDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>Display name</PopoverTitle>
          <PopoverDescription>
            Update your public profile details.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="display-name" className="w-1/2">
              Name
            </FieldLabel>
            <Input id="display-name" defaultValue="Alex Johnson" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="display-handle" className="w-1/2">
              Handle
            </FieldLabel>
            <Input id="display-handle" defaultValue="@alexj" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}`

function PopoverFormDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>Display name</PopoverTitle>
          <PopoverDescription>
            Update your public profile details.
          </PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel htmlFor="display-name" className="w-1/2">
              Name
            </FieldLabel>
            <Input id="display-name" defaultValue="Alex Johnson" />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="display-handle" className="w-1/2">
              Handle
            </FieldLabel>
            <Input id="display-handle" defaultValue="@alexj" />
          </Field>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  )
}

// ── Button group ─────────────────────────────────────────────────────────────

const popoverButtonGroupCode = `import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

export function PopoverButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Publish</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Publish options">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <PopoverHeader>
            <PopoverTitle>Publish with note</PopoverTitle>
            <PopoverDescription>
              Add a changelog note visible to your team.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="changelog" className="sr-only">
              Changelog note
            </FieldLabel>
            <Textarea
              id="changelog"
              placeholder="What changed in this release?"
              className="resize-none"
            />
            <FieldDescription>
              This note will appear in the activity feed.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}`

function PopoverButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Publish</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Publish options">
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <PopoverHeader>
            <PopoverTitle>Publish with note</PopoverTitle>
            <PopoverDescription>
              Add a changelog note visible to your team.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="changelog" className="sr-only">
              Changelog note
            </FieldLabel>
            <Textarea
              id="changelog"
              placeholder="What changed in this release?"
              className="resize-none"
            />
            <FieldDescription>
              This note will appear in the activity feed.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}

export {
  PopoverBasicDemo,
  popoverBasicCode,
  PopoverFormDemo,
  popoverFormCode,
  PopoverButtonGroupDemo,
  popoverButtonGroupCode,
}
