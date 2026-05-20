import {
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  LinkIcon,
  LockIcon,
  MailIcon,
  PlayIcon,
  RefreshCwIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"

import {
  InputGroupButtonDemo,
  InputGroupDropdownDemo,
} from "@/components/docs/examples/input-group-client"

export { InputGroupButtonDemo, InputGroupDropdownDemo }

// --- Default ---

const inputGroupDefaultCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { MailIcon } from "lucide-react"

export function InputGroupDefault() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="you@example.com" />
      </InputGroup>
    </div>
  )
}`

function InputGroupDefaultDemo() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="you@example.com" />
      </InputGroup>
    </div>
  )
}

// --- Align ---

const inputGroupAlignCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { LinkIcon, SearchIcon } from "lucide-react"

export function InputGroupAlign() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="inline-start" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="inline-end" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>px</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="block-start" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="url" placeholder="block-end" />
        <InputGroupAddon align="block-end">
          <InputGroupText>
            <LinkIcon />
            Paste a valid URL
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupAlignDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="inline-start" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="number" placeholder="inline-end" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>px</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="block-start" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="url" placeholder="block-end" />
        <InputGroupAddon align="block-end">
          <InputGroupText>
            <LinkIcon />
            Paste a valid URL
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Icon ---

const inputGroupIconCode = `import {
  CreditCardIcon,
  LockIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupIconExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search products..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon align="inline-end">
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <LockIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupIconDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search products..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon align="inline-end">
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <LockIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Text ---

const inputGroupTextCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupTextExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>+1</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="tel" placeholder="(555) 000-0000" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="yourapp" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.acme.io</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupTextDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>+1</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="tel" placeholder="(555) 000-0000" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="yourapp" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.acme.io</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Kbd ---

const inputGroupKbdCode = `import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function InputGroupKbdExample() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documentation..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}`

function InputGroupKbdDemo() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documentation..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}

// --- Button (code string only — demo is in input-group-client.tsx) ---

const inputGroupButtonCode = `"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupButtonExample() {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText("sk-live-a1b2c3d4e5f6g7h8")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupInput readOnly value="sk-live-a1b2c3d4e5f6g7h8" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-sm"
            aria-label="Copy API key"
            onClick={handleCopy}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput
          type={visible ? "text" : "password"}
          placeholder="Password"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-sm"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Promo code" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary" size="sm">
            Apply
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

// --- Textarea ---

const inputGroupTextareaCode = `import {
  CodeIcon,
  CopyIcon,
  PlayIcon,
  RefreshCwIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextareaExample() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <CodeIcon />
            script.js
          </InputGroupText>
          <InputGroupButton
            size="icon-xs"
            className="ml-auto"
            aria-label="Refresh"
          >
            <RefreshCwIcon />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" variant="ghost" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="console.log('Hello, world!');"
          className="font-mono text-sm"
          rows={5}
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton
            size="xs"
            className="ml-auto"
            variant="default"
          >
            <PlayIcon data-icon="inline-start" />
            Run
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupTextareaDemo() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <CodeIcon />
            script.js
          </InputGroupText>
          <InputGroupButton
            size="icon-xs"
            className="ml-auto"
            aria-label="Refresh"
          >
            <RefreshCwIcon />
          </InputGroupButton>
          <InputGroupButton size="icon-xs" variant="ghost" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="console.log('Hello, world!');"
          className="font-mono text-sm"
          rows={5}
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="xs" className="ml-auto" variant="default">
            <PlayIcon data-icon="inline-start" />
            Run
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Label ---

const inputGroupLabelCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"

export function InputGroupLabelExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="handle">Handle</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="handle" placeholder="johndoe" />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="site">Website</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="site" type="url" placeholder="yoursite.com" />
        </InputGroup>
      </div>
    </div>
  )
}`

function InputGroupLabelDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="handle">Handle</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="handle" placeholder="johndoe" />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="site">Website</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="site" type="url" placeholder="yoursite.com" />
        </InputGroup>
      </div>
    </div>
  )
}

// --- Dropdown (code string only — demo is in input-group-client.tsx) ---

const inputGroupDropdownCode = `"use client"

import { useState } from "react"
import { ChevronDownIcon, SearchIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

const SCOPES = ["All", "Products", "Docs", "Users"]

export function InputGroupDropdownExample() {
  const [scope, setScope] = useState("All")

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton size="xs" className="gap-1">
              {scope}
              <ChevronDownIcon />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {SCOPES.map((s) => (
                <DropdownMenuItem key={s} onSelect={() => setScope(s)}>
                  {s}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  )
}`

// --- Spinner ---

const inputGroupSpinnerCode = `import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export function InputGroupSpinnerExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput defaultValue="react hooks" readOnly />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          type="email"
          defaultValue="jane@example.com"
          readOnly
        />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupSpinnerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput defaultValue="react hooks" readOnly />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput
          type="email"
          defaultValue="jane@example.com"
          readOnly
        />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- In card ---

const inputGroupInCardCode = `import { MailIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"

export function InputGroupInCardExample() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your public profile.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-name">Full name</Label>
          <InputGroup>
            <InputGroupAddon>
              <UserIcon />
            </InputGroupAddon>
            <InputGroupInput id="card-name" placeholder="Jane Doe" />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-email">Email</Label>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput
              id="card-email"
              type="email"
              placeholder="jane@example.com"
            />
          </InputGroup>
        </div>
      </CardContent>
      <CardFooter className="border-t justify-end">
        <Button size="sm">Save changes</Button>
      </CardFooter>
    </Card>
  )
}`

function InputGroupInCardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your public profile.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-name">Full name</Label>
          <InputGroup>
            <InputGroupAddon>
              <UserIcon />
            </InputGroupAddon>
            <InputGroupInput id="card-name" placeholder="Jane Doe" />
          </InputGroup>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="card-email">Email</Label>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput
              id="card-email"
              type="email"
              placeholder="jane@example.com"
            />
          </InputGroup>
        </div>
      </CardContent>
      <CardFooter className="border-t justify-end">
        <Button size="sm">Save changes</Button>
      </CardFooter>
    </Card>
  )
}

export {
  InputGroupDefaultDemo,
  InputGroupAlignDemo,
  InputGroupIconDemo,
  InputGroupTextDemo,
  InputGroupKbdDemo,
  InputGroupLabelDemo,
  InputGroupSpinnerDemo,
  InputGroupInCardDemo,
  InputGroupTextareaDemo,
  inputGroupDefaultCode,
  inputGroupAlignCode,
  inputGroupIconCode,
  inputGroupTextCode,
  inputGroupKbdCode,
  inputGroupLabelCode,
  inputGroupDropdownCode,
  inputGroupSpinnerCode,
  inputGroupInCardCode,
  inputGroupButtonCode,
  inputGroupTextareaCode,
}
