import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"

const labelBasicCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelBasic() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="bilal" />
    </div>
  )
}`

function LabelBasicDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="bilal" />
    </div>
  )
}

const labelCheckboxCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelCheckbox() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Send me product updates and announcements</Label>
    </div>
  )
}`

function LabelCheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Send me product updates and announcements</Label>
    </div>
  )
}

const labelInputGroupCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"

export function LabelInputGroup() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="handle">Social handle</Label>
      <InputGroup>
        <InputGroupInput id="handle" placeholder="bilal" />
        <InputGroupAddon>
          <Label htmlFor="handle">@</Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function LabelInputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="handle">Social handle</Label>
      <InputGroup>
        <InputGroupInput id="handle" placeholder="bilal" />
        <InputGroupAddon>
          <Label htmlFor="handle">@</Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export {
  LabelBasicDemo,
  LabelCheckboxDemo,
  LabelInputGroupDemo,
  labelBasicCode,
  labelCheckboxCode,
  labelInputGroupCode,
}
