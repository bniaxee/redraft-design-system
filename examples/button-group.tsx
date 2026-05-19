import {
  ArchiveIcon,
  AudioLinesIcon,
  ChevronDownIcon,
  CopyIcon,
  MailIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PaperclipIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const buttonGroupBasicCode = `import { ArchiveIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupBasic() {
  return (
    <ButtonGroup aria-label="Report actions">
      <Button variant="outline">
        <ArchiveIcon data-icon="inline-start" />
        Archive Report
      </Button>
      <Button variant="outline">Snooze</Button>
      <Button variant="outline">
        <CopyIcon data-icon="inline-start" />
        Copy
      </Button>
    </ButtonGroup>
  )
}`

function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup aria-label="Report actions">
      <Button variant="outline">
        <ArchiveIcon data-icon="inline-start" />
        Archive Report
      </Button>
      <Button variant="outline">Snooze</Button>
      <Button variant="outline">
        <CopyIcon data-icon="inline-start" />
        Copy
      </Button>
    </ButtonGroup>
  )
}

const buttonGroupOrientationCode = `import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupOrientation() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <ButtonGroup aria-label="Horizontal quantity controls">
        <Button variant="outline" size="icon" aria-label="Decrease quantity">
          <MinusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Increase quantity">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical quantity controls"
      >
        <Button variant="outline" size="icon" aria-label="Increase quantity">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Decrease quantity">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}`

function ButtonGroupOrientationDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <ButtonGroup aria-label="Horizontal quantity controls">
        <Button variant="outline" size="icon" aria-label="Decrease quantity">
          <MinusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Increase quantity">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical quantity controls"
      >
        <Button variant="outline" size="icon" aria-label="Increase quantity">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Decrease quantity">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

const buttonGroupSizeCode = `import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupSize() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <ButtonGroup aria-label="Small button group">
        <Button variant="outline" size="sm">
          <PlusIcon data-icon="inline-start" />
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button Group
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Default button group">
        <Button variant="outline">
          <PlusIcon data-icon="inline-start" />
          Default
        </Button>
        <Button variant="outline">Button Group</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Large button group">
        <Button variant="outline" size="lg">
          <PlusIcon data-icon="inline-start" />
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button Group
        </Button>
      </ButtonGroup>
    </div>
  )
}`

function ButtonGroupSizeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <ButtonGroup aria-label="Small button group">
        <Button variant="outline" size="sm">
          <PlusIcon data-icon="inline-start" />
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button Group
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Default button group">
        <Button variant="outline">
          <PlusIcon data-icon="inline-start" />
          Default
        </Button>
        <Button variant="outline">Button Group</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Large button group">
        <Button variant="outline" size="lg">
          <PlusIcon data-icon="inline-start" />
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button Group
        </Button>
      </ButtonGroup>
    </div>
  )
}

const buttonGroupNestedCode = `import { AudioLinesIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupNested() {
  return (
    <ButtonGroup aria-label="Toolbar actions">
      <ButtonGroup aria-label="Audio actions">
        <Button variant="outline" size="icon" aria-label="Voice mode">
          <AudioLinesIcon />
        </Button>
        <Button variant="outline">Voice</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Create actions">
        <Button variant="outline">
          <PlusIcon data-icon="inline-start" />
          New
        </Button>
        <Button variant="outline" size="icon" aria-label="More actions">
          <MoreHorizontalIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}`

function ButtonGroupNestedDemo() {
  return (
    <ButtonGroup aria-label="Toolbar actions">
      <ButtonGroup aria-label="Audio actions">
        <Button variant="outline" size="icon" aria-label="Voice mode">
          <AudioLinesIcon />
        </Button>
        <Button variant="outline">Voice</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Create actions">
        <Button variant="outline">
          <PlusIcon data-icon="inline-start" />
          New
        </Button>
        <Button variant="outline" size="icon" aria-label="More actions">
          <MoreHorizontalIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}

const buttonGroupSeparatorCode = `import { CopyIcon, PaperclipIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup aria-label="Clipboard actions">
      <Button variant="secondary">
        <CopyIcon data-icon="inline-start" />
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon" aria-label="Attach file">
        <PaperclipIcon />
      </Button>
    </ButtonGroup>
  )
}`

function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup aria-label="Clipboard actions">
      <Button variant="secondary">
        <CopyIcon data-icon="inline-start" />
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon" aria-label="Attach file">
        <PaperclipIcon />
      </Button>
    </ButtonGroup>
  )
}

const buttonGroupSplitCode = `import { ChevronDownIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"

export function ButtonGroupSplit() {
  return (
    <ButtonGroup aria-label="Split button">
      <Button>
        <PlusIcon data-icon="inline-start" />
        Button
      </Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}`

function ButtonGroupSplitDemo() {
  return (
    <ButtonGroup aria-label="Split button">
      <Button>
        <PlusIcon data-icon="inline-start" />
        Button
      </Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}

const buttonGroupInputCode = `import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export function ButtonGroupInput() {
  return (
    <ButtonGroup className="w-full max-w-sm" aria-label="Search">
      <Button variant="outline" size="icon" aria-label="Search">
        <SearchIcon />
      </Button>
      <Input aria-label="Search documents" placeholder="Search documents..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}`

function ButtonGroupInputDemo() {
  return (
    <ButtonGroup className="w-full max-w-sm" aria-label="Search">
      <Button variant="outline" size="icon" aria-label="Search">
        <SearchIcon />
      </Button>
      <Input aria-label="Search documents" placeholder="Search documents..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}

const buttonGroupInputGroupCode = `import { MailIcon, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function ButtonGroupInputGroup() {
  return (
    <ButtonGroup className="w-full max-w-md" aria-label="Invite member">
      <InputGroup>
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" />
        <InputGroupAddon align="inline-end">
          <Kbd>Ctrl K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <Button variant="outline">
        <SendIcon data-icon="inline-start" />
        Invite
      </Button>
    </ButtonGroup>
  )
}`

function ButtonGroupInputGroupDemo() {
  return (
    <ButtonGroup className="w-full max-w-md" aria-label="Invite member">
      <InputGroup>
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="Email address" />
        <InputGroupAddon align="inline-end">
          <Kbd>Ctrl K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <Button variant="outline">
        <SendIcon data-icon="inline-start" />
        Invite
      </Button>
    </ButtonGroup>
  )
}

const buttonGroupDropdownCode = `import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ButtonGroupDropdown() {
  return (
    <ButtonGroup aria-label="Follow options">
      <Button>Follow</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" aria-label="More follow options">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mute updates</DropdownMenuItem>
          <DropdownMenuItem>Add to list</DropdownMenuItem>
          <DropdownMenuItem>Share profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}`

function ButtonGroupDropdownDemo() {
  return (
    <ButtonGroup aria-label="Follow options">
      <Button>Follow</Button>
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" aria-label="More follow options">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mute updates</DropdownMenuItem>
          <DropdownMenuItem>Add to list</DropdownMenuItem>
          <DropdownMenuItem>Share profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}

const buttonGroupSelectCode = `import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ButtonGroupSelect() {
  return (
    <ButtonGroup className="w-full max-w-sm" aria-label="Payment amount">
      <ButtonGroupText>$</ButtonGroupText>
      <Input aria-label="Amount" defaultValue="100.00" />
      <Select defaultValue="usd">
        <SelectTrigger aria-label="Currency">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="gbp">GBP</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  )
}`

function ButtonGroupSelectDemo() {
  return (
    <ButtonGroup className="w-full max-w-sm" aria-label="Payment amount">
      <ButtonGroupText>$</ButtonGroupText>
      <Input aria-label="Amount" defaultValue="100.00" />
      <Select defaultValue="usd">
        <SelectTrigger aria-label="Currency">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="gbp">GBP</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  )
}

export {
  ButtonGroupBasicDemo,
  ButtonGroupDropdownDemo,
  ButtonGroupInputDemo,
  ButtonGroupInputGroupDemo,
  ButtonGroupNestedDemo,
  ButtonGroupOrientationDemo,
  ButtonGroupSelectDemo,
  ButtonGroupSeparatorDemo,
  ButtonGroupSizeDemo,
  ButtonGroupSplitDemo,
  buttonGroupBasicCode,
  buttonGroupDropdownCode,
  buttonGroupInputCode,
  buttonGroupInputGroupCode,
  buttonGroupNestedCode,
  buttonGroupOrientationCode,
  buttonGroupSelectCode,
  buttonGroupSeparatorCode,
  buttonGroupSizeCode,
  buttonGroupSplitCode,
}
