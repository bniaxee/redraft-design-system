"use client"

import { useState } from "react"
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
} from "lucide-react"

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

export function InputGroupDropdownDemo() {
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
}

export function InputGroupButtonDemo() {
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
}
