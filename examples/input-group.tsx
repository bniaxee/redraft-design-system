"use client"

import { useState } from "react"
import {
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  LinkIcon,
  MailIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

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
    </div>
  )
}

// --- Button ---

const inputGroupButtonCode = `"use client"

import { useState } from "react"
import { CopyIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupButtonExample() {
  const [visible, setVisible] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-sm"
              aria-label="Clear"
              onClick={() => setQuery("")}
            >
              <XIcon />
            </InputGroupButton>
          </InputGroupAddon>
        )}
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
          <InputGroupText>API key</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput readOnly value="sk-••••••••••••••••" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Copy key">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupButtonDemo() {
  const [visible, setVisible] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupInput
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-sm"
              aria-label="Clear"
              onClick={() => setQuery("")}
            >
              <XIcon />
            </InputGroupButton>
          </InputGroupAddon>
        )}
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
          <InputGroupText>API key</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput readOnly value="sk-••••••••••••••••" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Copy key">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

// --- Textarea ---

const inputGroupTextareaCode = `import {
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
        <InputGroupAddon align="block-start">
          <InputGroupText>Message</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Write a message..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="xs">Send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function InputGroupTextareaDemo() {
  return (
    <div className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Message</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Write a message..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="xs">Send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export {
  InputGroupDefaultDemo,
  InputGroupAlignDemo,
  InputGroupIconDemo,
  InputGroupTextDemo,
  InputGroupButtonDemo,
  InputGroupTextareaDemo,
  inputGroupDefaultCode,
  inputGroupAlignCode,
  inputGroupIconCode,
  inputGroupTextCode,
  inputGroupButtonCode,
  inputGroupTextareaCode,
}
