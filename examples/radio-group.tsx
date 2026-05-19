import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const radioGroupBasicCode = `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupBasic() {
  return (
    <RadioGroup defaultValue="option-2" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}`

function RadioGroupBasicDemo() {
  return (
    <RadioGroup defaultValue="option-2" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="rg-basic-1" />
        <Label htmlFor="rg-basic-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="rg-basic-2" />
        <Label htmlFor="rg-basic-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="rg-basic-3" />
        <Label htmlFor="rg-basic-3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}

const radioGroupDescriptionsCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDescriptions() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-sm">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="rd1" />
        <FieldContent>
          <FieldLabel htmlFor="rd1">Default</FieldLabel>
          <FieldDescription>Standard layout with moderate spacing.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="rd2" />
        <FieldContent>
          <FieldLabel htmlFor="rd2">Comfortable</FieldLabel>
          <FieldDescription>Spacious layout with extra padding.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="rd3" />
        <FieldContent>
          <FieldLabel htmlFor="rd3">Compact</FieldLabel>
          <FieldDescription>Dense layout with minimal spacing.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}`

function RadioGroupDescriptionsDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-sm">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="rg-desc-1" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-1">Default</FieldLabel>
          <FieldDescription>Standard layout with moderate spacing.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="rg-desc-2" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-2">Comfortable</FieldLabel>
          <FieldDescription>Spacious layout with extra padding.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="rg-desc-3" />
        <FieldContent>
          <FieldLabel htmlFor="rg-desc-3">Compact</FieldLabel>
          <FieldDescription>Dense layout with minimal spacing.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}

const radioGroupFieldsetCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupFieldset() {
  return (
    <FieldSet>
      <FieldLegend>Notification preference</FieldLegend>
      <FieldDescription>Choose how you'd like to receive updates.</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal">
          <RadioGroupItem value="email" id="rf1" />
          <FieldLabel htmlFor="rf1">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="sms" id="rf2" />
          <FieldLabel htmlFor="rf2">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="push" id="rf3" />
          <FieldLabel htmlFor="rf3">Push notification</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}`

function RadioGroupFieldsetDemo() {
  return (
    <FieldSet>
      <FieldLegend>Notification preference</FieldLegend>
      <FieldDescription>Choose how you&apos;d like to receive updates.</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal">
          <RadioGroupItem value="email" id="rg-fs-1" />
          <FieldLabel htmlFor="rg-fs-1">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="sms" id="rg-fs-2" />
          <FieldLabel htmlFor="rg-fs-2">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="push" id="rg-fs-3" />
          <FieldLabel htmlFor="rg-fs-3">Push notification</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

const radioGroupDisabledCode = `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="option-1" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="r2" disabled />
        <Label htmlFor="r2">Option 2 (unavailable)</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}`

function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="option-1" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="rg-dis-1" />
        <Label htmlFor="rg-dis-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="rg-dis-2" disabled />
        <Label htmlFor="rg-dis-2">Option 2 (unavailable)</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="rg-dis-3" />
        <Label htmlFor="rg-dis-3">Option 3</Label>
      </div>
    </RadioGroup>
  )
}

const radioGroupInvalidCode = `import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupInvalid() {
  return (
    <FieldSet>
      <FieldLegend>Subscription plan</FieldLegend>
      <RadioGroup>
        <Field orientation="horizontal">
          <RadioGroupItem value="free" id="ri1" aria-invalid />
          <FieldLabel htmlFor="ri1">Free</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="pro" id="ri2" aria-invalid />
          <FieldLabel htmlFor="ri2">Pro</FieldLabel>
        </Field>
      </RadioGroup>
      <FieldError>Please select a plan to continue.</FieldError>
    </FieldSet>
  )
}`

function RadioGroupInvalidDemo() {
  return (
    <FieldSet>
      <FieldLegend>Subscription plan</FieldLegend>
      <RadioGroup>
        <Field orientation="horizontal">
          <RadioGroupItem value="free" id="rg-inv-1" aria-invalid />
          <FieldLabel htmlFor="rg-inv-1">Free</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="pro" id="rg-inv-2" aria-invalid />
          <FieldLabel htmlFor="rg-inv-2">Pro</FieldLabel>
        </Field>
      </RadioGroup>
      <FieldError>Please select a plan to continue.</FieldError>
    </FieldSet>
  )
}

export {
  RadioGroupBasicDemo,
  RadioGroupDescriptionsDemo,
  RadioGroupFieldsetDemo,
  RadioGroupDisabledDemo,
  RadioGroupInvalidDemo,
  radioGroupBasicCode,
  radioGroupDescriptionsCode,
  radioGroupFieldsetCode,
  radioGroupDisabledCode,
  radioGroupInvalidCode,
}
