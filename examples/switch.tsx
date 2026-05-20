import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const switchBasicCode = `import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchBasic() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="product-updates" defaultChecked />
      <Label htmlFor="product-updates">Product updates</Label>
    </div>
  )
}`

function SwitchBasicDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="product-updates" defaultChecked />
      <Label htmlFor="product-updates">Product updates</Label>
    </div>
  )
}

const switchSizesCode = `import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchSizes() {
  return (
    <FieldGroup className="w-full max-w-[12rem]">
      <Field orientation="horizontal">
        <Switch id="compact-notifications" size="sm" />
        <FieldLabel htmlFor="compact-notifications">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="default-notifications" size="default" defaultChecked />
        <FieldLabel htmlFor="default-notifications">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}`

function SwitchSizesDemo() {
  return (
    <FieldGroup className="w-full max-w-[12rem]">
      <Field orientation="horizontal">
        <Switch id="compact-notifications" size="sm" />
        <FieldLabel htmlFor="compact-notifications">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="default-notifications" size="default" defaultChecked />
        <FieldLabel htmlFor="default-notifications">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}

const switchDescriptionCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="weekly-summary">Weekly summary</FieldLabel>
        <FieldDescription>
          Send one digest with project activity every Monday morning.
        </FieldDescription>
      </FieldContent>
      <Switch id="weekly-summary" defaultChecked />
    </Field>
  )
}`

function SwitchDescriptionDemo() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="weekly-summary">Weekly summary</FieldLabel>
        <FieldDescription>
          Send one digest with project activity every Monday morning.
        </FieldDescription>
      </FieldContent>
      <Switch id="weekly-summary" defaultChecked />
    </Field>
  )
}

const switchChoiceCardCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldLabel htmlFor="auto-archive">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Auto-archive completed tasks</FieldTitle>
            <FieldDescription>
              Move completed tasks out of the active view after 30 days.
            </FieldDescription>
          </FieldContent>
          <Switch id="auto-archive" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="desktop-alerts">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Desktop alerts</FieldTitle>
            <FieldDescription>
              Show a notification when someone mentions you.
            </FieldDescription>
          </FieldContent>
          <Switch id="desktop-alerts" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}`

function SwitchChoiceCardDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldLabel htmlFor="auto-archive">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Auto-archive completed tasks</FieldTitle>
            <FieldDescription>
              Move completed tasks out of the active view after 30 days.
            </FieldDescription>
          </FieldContent>
          <Switch id="auto-archive" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="desktop-alerts">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Desktop alerts</FieldTitle>
            <FieldDescription>
              Show a notification when someone mentions you.
            </FieldDescription>
          </FieldContent>
          <Switch id="desktop-alerts" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}

const switchStatesCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export function SwitchStates() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field data-disabled orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="audit-exports">Audit log exports</FieldLabel>
          <FieldDescription>
            Available on Enterprise workspaces.
          </FieldDescription>
        </FieldContent>
        <Switch id="audit-exports" disabled />
      </Field>
      <Field data-invalid orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="required-security-alerts">
            Security alerts
          </FieldLabel>
          <FieldError>Owners must keep security alerts enabled.</FieldError>
        </FieldContent>
        <Switch id="required-security-alerts" aria-invalid />
      </Field>
    </FieldGroup>
  )
}`

function SwitchStatesDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field data-disabled orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="audit-exports">Audit log exports</FieldLabel>
          <FieldDescription>Available on Enterprise workspaces.</FieldDescription>
        </FieldContent>
        <Switch id="audit-exports" disabled />
      </Field>
      <Field data-invalid orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="required-security-alerts">
            Security alerts
          </FieldLabel>
          <FieldError>Owners must keep security alerts enabled.</FieldError>
        </FieldContent>
        <Switch id="required-security-alerts" aria-invalid />
      </Field>
    </FieldGroup>
  )
}

export {
  SwitchBasicDemo,
  SwitchChoiceCardDemo,
  SwitchDescriptionDemo,
  SwitchSizesDemo,
  SwitchStatesDemo,
  switchBasicCode,
  switchChoiceCardCode,
  switchDescriptionCode,
  switchSizesCode,
  switchStatesCode,
}
