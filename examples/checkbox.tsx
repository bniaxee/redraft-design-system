import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"

const checkboxBasicCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxBasic() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`

function CheckboxBasicDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

const checkboxDescriptionCode = `import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

export function CheckboxDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="email-updates" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="email-updates">Email updates</FieldLabel>
        <FieldDescription>
          Receive product updates, security alerts, and account notices.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}`

function CheckboxDescriptionDemo() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="email-updates" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="email-updates">Email updates</FieldLabel>
        <FieldDescription>
          Receive product updates, security alerts, and account notices.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}

const checkboxDisabledCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"

export function CheckboxDisabled() {
  return (
    <Field data-disabled orientation="horizontal" className="max-w-sm">
      <Checkbox id="sms-alerts" disabled />
      <FieldContent>
        <FieldLabel htmlFor="sms-alerts">SMS alerts</FieldLabel>
        <FieldDescription>
          SMS alerts are not available for this workspace.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}`

function CheckboxDisabledDemo() {
  return (
    <Field data-disabled orientation="horizontal" className="max-w-sm">
      <Checkbox id="sms-alerts" disabled />
      <FieldContent>
        <FieldLabel htmlFor="sms-alerts">SMS alerts</FieldLabel>
        <FieldDescription>
          SMS alerts are not available for this workspace.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}

const checkboxInvalidCode = `import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"

export function CheckboxInvalid() {
  return (
    <Field data-invalid orientation="horizontal" className="max-w-sm">
      <Checkbox id="policy" aria-invalid />
      <FieldContent>
        <FieldLabel htmlFor="policy">Accept the policy</FieldLabel>
        <FieldError>You must accept the policy before continuing.</FieldError>
      </FieldContent>
    </Field>
  )
}`

function CheckboxInvalidDemo() {
  return (
    <Field data-invalid orientation="horizontal" className="max-w-sm">
      <Checkbox id="policy" aria-invalid />
      <FieldContent>
        <FieldLabel htmlFor="policy">Accept the policy</FieldLabel>
        <FieldError>You must accept the policy before continuing.</FieldError>
      </FieldContent>
    </Field>
  )
}

const checkboxGroupCode = `import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

export function CheckboxGroup() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Export includes</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        <Field orientation="horizontal">
          <Checkbox id="export-comments" name="export" value="comments" defaultChecked />
          <FieldLabel htmlFor="export-comments">Comments</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="export-attachments" name="export" value="attachments" defaultChecked />
          <FieldLabel htmlFor="export-attachments">Attachments</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="export-history" name="export" value="history" />
          <FieldLabel htmlFor="export-history">Version history</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}`

function CheckboxGroupDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Export includes</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        <Field orientation="horizontal">
          <Checkbox
            id="export-comments"
            name="export"
            value="comments"
            defaultChecked
          />
          <FieldLabel htmlFor="export-comments">Comments</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="export-attachments"
            name="export"
            value="attachments"
            defaultChecked
          />
          <FieldLabel htmlFor="export-attachments">Attachments</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="export-history" name="export" value="history" />
          <FieldLabel htmlFor="export-history">Version history</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export {
  CheckboxBasicDemo,
  CheckboxDescriptionDemo,
  CheckboxDisabledDemo,
  CheckboxGroupDemo,
  CheckboxInvalidDemo,
  checkboxBasicCode,
  checkboxDescriptionCode,
  checkboxDisabledCode,
  checkboxGroupCode,
  checkboxInvalidCode,
}
