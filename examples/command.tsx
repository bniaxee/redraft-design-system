import {
  CalendarIcon,
  CalculatorIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import {
  CommandGroupsInteractive,
  CommandKeyboardInteractive,
} from "@/components/docs/examples/command-interactive"

// ── Basic inline ───────────────────────────────────────────────────────────────

const commandBasicCode = `import {
  CalendarIcon,
  CalculatorIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandBasic() {
  return (
    <Command className="max-w-sm rounded-3xl border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`

function CommandBasicDemo() {
  return (
    <Command className="max-w-sm rounded-3xl border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

// ── Command dialog (groups) ────────────────────────────────────────────────────

const commandGroupsCode = `"use client"

import * as React from "react"
import {
  CodeIcon,
  FileTextIcon,
  ImageIcon,
  LinkIcon,
  TableIcon,
  VideoIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open insert palette
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search blocks and media..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Blocks">
              <CommandItem>
                <FileTextIcon />
                <span>Text</span>
              </CommandItem>
              <CommandItem>
                <ImageIcon />
                <span>Image</span>
              </CommandItem>
              <CommandItem>
                <TableIcon />
                <span>Table</span>
              </CommandItem>
              <CommandItem>
                <CodeIcon />
                <span>Code block</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Media">
              <CommandItem>
                <VideoIcon />
                <span>Video embed</span>
              </CommandItem>
              <CommandItem>
                <LinkIcon />
                <span>Bookmark</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`

function CommandGroupsDemo() {
  return <CommandGroupsInteractive />
}

// ── Keyboard shortcut trigger ──────────────────────────────────────────────────

const commandKeyboardCode = `"use client"

import * as React from "react"
import {
  BellIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandKeyboard() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search pages and settings..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem>
                <HomeIcon />
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem>
                <FolderIcon />
                <span>Projects</span>
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                <span>Documents</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Account</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BellIcon />
                <span>Notifications</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}`

function CommandKeyboardDemo() {
  return <CommandKeyboardInteractive />
}

export {
  CommandBasicDemo,
  commandBasicCode,
  CommandGroupsDemo,
  commandGroupsCode,
  CommandKeyboardDemo,
  commandKeyboardCode,
}
