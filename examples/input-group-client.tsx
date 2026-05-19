"use client"

import { useState } from "react"
import {
  CheckIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const MAX_CHARS = 280

export function InputGroupButtonDemo() {
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
}

export function InputGroupTextareaDemo() {
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
}
