"use client"

import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const inputDefaultCode = `import { Input } from "@/components/ui/input"

export function InputDefault() {
  return (
    <div className="w-full max-w-sm">
      <Input type="text" placeholder="Enter text..." />
    </div>
  )
}`

function InputDefaultDemo() {
  return (
    <div className="w-full max-w-sm">
      <Input type="text" placeholder="Enter text..." />
    </div>
  )
}

const inputStatesCode = `import { Input } from "@/components/ui/input"

export function InputStates() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input type="text" placeholder="Default" />
      <Input type="text" placeholder="Disabled" disabled />
      <Input type="text" placeholder="Invalid" aria-invalid />
    </div>
  )
}`

function InputStatesDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input type="text" placeholder="Default" />
      <Input type="text" placeholder="Disabled" disabled />
      <Input type="text" placeholder="Invalid" aria-invalid />
    </div>
  )
}

const inputWithLabelCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputWithLabel() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" type="text" placeholder="bilal" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  )
}`

function InputWithLabelDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" type="text" placeholder="bilal" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  )
}

const inputValidationCode = `import { useState } from "react"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputValidation() {
  const [value, setValue] = useState("")
  const error = value.length > 0 && value.length < 3
    ? "Must be at least 3 characters."
    : ""

  return (
    <Field className="max-w-sm" data-invalid={!!error}>
      <FieldLabel htmlFor="display-name">Display name</FieldLabel>
      <Input
        id="display-name"
        type="text"
        placeholder="Jane"
        value={value}
        aria-invalid={!!error}
        onChange={(e) => setValue(e.target.value)}
      />
      <FieldError>{error}</FieldError>
    </Field>
  )
}`

function InputValidationDemo() {
  const [value, setValue] = useState("")
  const error =
    value.length > 0 && value.length < 3
      ? "Must be at least 3 characters."
      : ""

  return (
    <Field className="max-w-sm" data-invalid={!!error}>
      <FieldLabel htmlFor="display-name">Display name</FieldLabel>
      <Input
        id="display-name"
        type="text"
        placeholder="Jane"
        value={value}
        aria-invalid={!!error}
        onChange={(e) => setValue(e.target.value)}
      />
      <FieldError>{error}</FieldError>
    </Field>
  )
}

const inputFileCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="resume">Resume</FieldLabel>
      <Input id="resume" type="file" />
      <FieldDescription>PDF or Word document, max 5 MB.</FieldDescription>
    </Field>
  )
}`

function InputFileDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="resume">Resume</FieldLabel>
      <Input id="resume" type="file" />
      <FieldDescription>PDF or Word document, max 5 MB.</FieldDescription>
    </Field>
  )
}

export {
  InputDefaultDemo,
  InputFileDemo,
  InputStatesDemo,
  InputValidationDemo,
  InputWithLabelDemo,
  inputDefaultCode,
  inputFileCode,
  inputStatesCode,
  inputValidationCode,
  inputWithLabelCode,
}
