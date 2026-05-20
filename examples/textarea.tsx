import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

const textareaDefaultCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDefault() {
  return (
    <div className="w-full max-w-sm">
      <Textarea placeholder="Write your bio..." />
    </div>
  )
}`

function TextareaDefaultDemo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea placeholder="Write your bio..." />
    </div>
  )
}

const textareaWithLabelCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="message">Message</FieldLabel>
      <Textarea id="message" placeholder="Type your message here." />
      <FieldDescription>Your message will be sent to the support team.</FieldDescription>
    </Field>
  )
}`

function TextareaWithLabelDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="message">Message</FieldLabel>
      <Textarea id="message" placeholder="Type your message here." />
      <FieldDescription>
        Your message will be sent to the support team.
      </FieldDescription>
    </Field>
  )
}

const textareaStatesCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaStates() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" aria-invalid />
    </div>
  )
}`

function TextareaStatesDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" aria-invalid />
    </div>
  )
}

const textareaResizableCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaResizable() {
  return (
    <div className="w-full max-w-sm self-start">
      <Textarea className="resize-y" placeholder="Drag the corner to resize..." />
    </div>
  )
}`

function TextareaResizableDemo() {
  return (
    <div className="w-full max-w-sm self-start">
      <Textarea className="resize-y" placeholder="Drag the corner to resize..." />
    </div>
  )
}

const textareaWithButtonCode = `import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithButton() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Share your feedback..." />
      <Button>Submit feedback</Button>
    </div>
  )
}`

function TextareaWithButtonDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Share your feedback..." />
      <Button>Submit feedback</Button>
    </div>
  )
}

export {
  TextareaDefaultDemo,
  TextareaResizableDemo,
  TextareaStatesDemo,
  TextareaWithButtonDemo,
  TextareaWithLabelDemo,
  textareaDefaultCode,
  textareaResizableCode,
  textareaStatesCode,
  textareaWithButtonCode,
  textareaWithLabelCode,
}
