import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

const fieldBasicCode = `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldBasic() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" placeholder="Eve Johnson" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="eve@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}`

function FieldBasicDemo() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field>
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" placeholder="Eve Johnson" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="eve@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}

const fieldOrientationsCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export function FieldOrientations() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {/* Vertical (default) */}
      <Field>
        <FieldLabel htmlFor="org-name">Organization</FieldLabel>
        <Input id="org-name" placeholder="Acme Inc." />
      </Field>

      {/* Horizontal */}
      <Field orientation="horizontal">
        <FieldLabel htmlFor="public-profile">Public profile</FieldLabel>
        <Switch id="public-profile" />
      </Field>

      {/* Responsive */}
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="website">Website</FieldLabel>
          <FieldDescription>Your public-facing URL.</FieldDescription>
        </FieldContent>
        <Input id="website" placeholder="https://example.com" />
      </Field>
    </FieldGroup>
  )
}`

function FieldOrientationsDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="org-name">Organization</FieldLabel>
        <Input id="org-name" placeholder="Acme Inc." />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="public-profile">Public profile</FieldLabel>
        <Switch id="public-profile" />
      </Field>
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="website">Website</FieldLabel>
          <FieldDescription>Your public-facing URL.</FieldDescription>
        </FieldContent>
        <Input id="website" placeholder="https://example.com" />
      </Field>
    </FieldGroup>
  )
}

const fieldCheckboxGroupCode = `import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

export function FieldCheckboxGroup() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>Code updates</FieldLabel>
        <FieldDescription>
          Get notified when new commits are pushed to your repositories.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="notify-push" defaultChecked />
            <FieldLabel htmlFor="notify-push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notify-email-code" />
            <FieldLabel htmlFor="notify-email-code" className="font-normal">
              Email digest
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Deployments</FieldLabel>
        <FieldDescription>
          Know when a deployment succeeds or fails.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="notify-deploy-push" defaultChecked />
            <FieldLabel htmlFor="notify-deploy-push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notify-deploy-email" defaultChecked />
            <FieldLabel htmlFor="notify-deploy-email" className="font-normal">
              Email digest
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}`

function FieldCheckboxGroupDemo() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>Code updates</FieldLabel>
        <FieldDescription>
          Get notified when new commits are pushed to your repositories.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="notify-push" defaultChecked />
            <FieldLabel htmlFor="notify-push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notify-email-code" />
            <FieldLabel htmlFor="notify-email-code" className="font-normal">
              Email digest
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Deployments</FieldLabel>
        <FieldDescription>
          Know when a deployment succeeds or fails.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="notify-deploy-push" defaultChecked />
            <FieldLabel htmlFor="notify-deploy-push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="notify-deploy-email" defaultChecked />
            <FieldLabel htmlFor="notify-deploy-email" className="font-normal">
              Email digest
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}

const fieldFieldsetCode = `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldDescription>
        Enter the address where your order will be delivered.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street-addr">Street address</FieldLabel>
          <Input id="street-addr" placeholder="742 Evergreen Terrace" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city-addr">City</FieldLabel>
            <Input id="city-addr" placeholder="Springfield" />
          </Field>
          <Field>
            <FieldLabel htmlFor="postal-addr">Postal code</FieldLabel>
            <Input id="postal-addr" placeholder="62701" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}`

function FieldFieldsetDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldDescription>
        Enter the address where your order will be delivered.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street-addr">Street address</FieldLabel>
          <Input id="street-addr" placeholder="742 Evergreen Terrace" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city-addr">City</FieldLabel>
            <Input id="city-addr" placeholder="Springfield" />
          </Field>
          <Field>
            <FieldLabel htmlFor="postal-addr">Postal code</FieldLabel>
            <Input id="postal-addr" placeholder="62701" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}

const fieldChoiceCardCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FieldChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">Workspace plan</FieldLegend>
        <FieldDescription>
          Choose the plan that fits your team size.
        </FieldDescription>
        <RadioGroup defaultValue="pro">
          <FieldLabel htmlFor="plan-free">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Free</FieldTitle>
                <FieldDescription>Up to 3 members, 5 projects.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="free" id="plan-free" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="plan-pro">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Pro</FieldTitle>
                <FieldDescription>Unlimited members, 50 projects.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="plan-pro" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="plan-team">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Team</FieldTitle>
                <FieldDescription>SSO, audit logs, SLA support.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="team" id="plan-team" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}`

function FieldChoiceCardDemo() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">Workspace plan</FieldLegend>
        <FieldDescription>
          Choose the plan that fits your team size.
        </FieldDescription>
        <RadioGroup defaultValue="pro">
          <FieldLabel htmlFor="plan-free">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Free</FieldTitle>
                <FieldDescription>Up to 3 members, 5 projects.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="free" id="plan-free" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="plan-pro">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Pro</FieldTitle>
                <FieldDescription>Unlimited members, 50 projects.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="plan-pro" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="plan-team">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Team</FieldTitle>
                <FieldDescription>SSO, audit logs, SLA support.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="team" id="plan-team" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}

const fieldErrorCode = `import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldValidation() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field data-invalid="true">
        <FieldLabel htmlFor="val-email">Email</FieldLabel>
        <Input id="val-email" type="email" defaultValue="not-an-email" />
        <FieldError
          errors={[{ message: "Please enter a valid email address." }]}
        />
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="val-password">Password</FieldLabel>
        <Input id="val-password" type="password" defaultValue="short" />
        <FieldError
          errors={[
            { message: "Must be at least 8 characters." },
            { message: "Must contain at least one uppercase letter." },
          ]}
        />
      </Field>
    </FieldGroup>
  )
}`

function FieldErrorDemo() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <Field data-invalid="true">
        <FieldLabel htmlFor="val-email">Email</FieldLabel>
        <Input id="val-email" type="email" defaultValue="not-an-email" />
        <FieldError
          errors={[{ message: "Please enter a valid email address." }]}
        />
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="val-password">Password</FieldLabel>
        <Input id="val-password" type="password" defaultValue="short" />
        <FieldError
          errors={[
            { message: "Must be at least 8 characters." },
            { message: "Must contain at least one uppercase letter." },
          ]}
        />
      </Field>
    </FieldGroup>
  )
}

export {
  FieldBasicDemo,
  FieldOrientationsDemo,
  FieldCheckboxGroupDemo,
  FieldFieldsetDemo,
  FieldChoiceCardDemo,
  FieldErrorDemo,
  fieldBasicCode,
  fieldOrientationsCode,
  fieldCheckboxGroupCode,
  fieldFieldsetCode,
  fieldChoiceCardCode,
  fieldErrorCode,
}
