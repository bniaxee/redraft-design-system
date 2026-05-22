"use client"

import { useState } from "react"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

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

export { InputValidationDemo }
