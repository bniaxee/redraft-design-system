import { BoldIcon, ItalicIcon, SearchIcon, UnderlineIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const kbdDefaultCode = `import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDefault() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  )
}`

function KbdDefaultDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
  )
}

const kbdShortcutsCode = `import { Kbd, KbdGroup } from "@/components/ui/kbd"

const shortcuts = [
  { label: "Open command palette", keys: ["⌘", "K"] },
  { label: "Find in file", keys: ["⌘", "F"] },
  { label: "Save file", keys: ["⌘", "S"] },
  { label: "Toggle sidebar", keys: ["⌘", "B"] },
]

export function KbdShortcuts() {
  return (
    <div className="w-full max-w-sm space-y-3 rounded-lg border bg-background p-4">
      {shortcuts.map(({ label, keys }) => (
        <div key={label} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          <KbdGroup>
            {keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  )
}`

const shortcuts = [
  { label: "Open command palette", keys: ["⌘", "K"] },
  { label: "Find in file", keys: ["⌘", "F"] },
  { label: "Save file", keys: ["⌘", "S"] },
  { label: "Toggle sidebar", keys: ["⌘", "B"] },
]

function KbdShortcutsDemo() {
  return (
    <div className="w-full max-w-sm space-y-3 rounded-lg border bg-background p-4">
      {shortcuts.map(({ label, keys }) => (
        <div key={label} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          <KbdGroup>
            {keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  )
}

const kbdTooltipCode = `import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function KbdTooltip() {
  return (
    <TooltipProvider>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Bold">
              <BoldIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Bold{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>B</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Italic">
              <ItalicIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Italic{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>I</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Underline">
              <UnderlineIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Underline{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>U</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </TooltipProvider>
  )
}`

function KbdTooltipDemo() {
  return (
    <TooltipProvider>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Bold">
              <BoldIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Bold{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>B</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Italic">
              <ItalicIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Italic{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>I</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Underline">
              <UnderlineIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Underline{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>U</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </TooltipProvider>
  )
}

const kbdInputCode = `import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function KbdInput() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}`

function KbdInputDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}

export {
  KbdDefaultDemo,
  KbdShortcutsDemo,
  KbdTooltipDemo,
  KbdInputDemo,
  kbdDefaultCode,
  kbdShortcutsCode,
  kbdTooltipCode,
  kbdInputCode,
}
