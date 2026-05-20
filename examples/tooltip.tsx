import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const tooltipBasicCode = `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipBasic() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`

function TooltipBasicDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const tooltipKeyboardCode = `import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipKeyboard() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon-sm" aria-label="Save">
            <SaveIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Save changes <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`

function TooltipKeyboardDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon-sm" aria-label="Save">
            <SaveIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Save changes <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const tooltipSidesCode = `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipSides() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on the {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}`

function TooltipSidesDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on the {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

const tooltipDisabledCode = `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDisabled() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block w-fit">
            <Button disabled>Publish</Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fill in all required fields to publish</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`

function TooltipDisabledDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block w-fit">
            <Button disabled>Publish</Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fill in all required fields to publish</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export {
  TooltipBasicDemo,
  TooltipKeyboardDemo,
  TooltipSidesDemo,
  TooltipDisabledDemo,
  tooltipBasicCode,
  tooltipKeyboardCode,
  tooltipSidesCode,
  tooltipDisabledCode,
}
