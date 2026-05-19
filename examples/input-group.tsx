import {
  LinkIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

import {
  InputGroupButtonDemo,
  InputGroupTextareaDemo,
} from "@/components/docs/examples/input-group-client"

export { InputGroupButtonDemo, InputGroupTextareaDemo }

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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { MailIcon, SearchIcon } from "lucide-react"

export function InputGroupIcon() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupIconDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <MailIcon />
          </InputGroupText>
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
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="yoursite" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@acme.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupTextDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="yoursite" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@acme.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Button (code string only — demo is in input-group-client.tsx) ---

const inputGroupButtonCode = `"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon, EyeIcon, EyeOffIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupButtonExample() {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText("https://acme.com/invite/bni4x2")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupInput readOnly value="https://acme.com/invite/bni4x2" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-sm"
            aria-label="Copy link"
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
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <SearchIcon />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search docs..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary" size="sm">
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

// --- Textarea (code string only — demo is in input-group-client.tsx) ---

const inputGroupTextareaCode = `"use client"

import { useState } from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const MAX_CHARS = 280

export function InputGroupTextareaExample() {
  const [value, setValue] = useState("")
  const remaining = MAX_CHARS - value.length

  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Post</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="What's on your mind?"
          rows={4}
          maxLength={MAX_CHARS}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputGroupAddon align="block-end" className="justify-between">
          <InputGroupText
            className={remaining <= 20 ? "text-destructive" : ""}
          >
            {remaining} left
          </InputGroupText>
          <InputGroupButton variant="default" size="xs" disabled={value.length === 0}>
            Publish
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

export {
  InputGroupDefaultDemo,
  InputGroupAlignDemo,
  InputGroupIconDemo,
  InputGroupTextDemo,
  inputGroupDefaultCode,
  inputGroupAlignCode,
  inputGroupIconCode,
  inputGroupTextCode,
  inputGroupButtonCode,
  inputGroupTextareaCode,
}
