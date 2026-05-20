import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const hoverCardBasicCode = `import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardBasic() {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant="link">@sarah_chen</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-1">
        <div className="font-semibold">Sarah Chen</div>
        <div className="text-sm text-muted-foreground">
          Product Designer · Redraft
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined January 2023
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`

function HoverCardBasicDemo() {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant="link">@sarah_chen</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-1">
        <div className="font-semibold">Sarah Chen</div>
        <div className="text-sm text-muted-foreground">
          Product Designer · Redraft
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined January 2023
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const SIDES = ["top", "right", "bottom", "left"] as const

const hoverCardSidesCode = `import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const SIDES = ["top", "right", "bottom", "left"] as const

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-52">
            <div className="flex flex-col gap-1">
              <div className="font-semibold capitalize">{side}</div>
              <div className="text-sm text-muted-foreground">
                Card positioned on the {side} side of the trigger.
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}`

function HoverCardSidesDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-52">
            <div className="flex flex-col gap-1">
              <div className="font-semibold capitalize">{side}</div>
              <div className="text-sm text-muted-foreground">
                Card positioned on the {side} side of the trigger.
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

const hoverCardDelayCode = `import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDelay() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Instant</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-52">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">No delay</div>
            <div className="text-sm text-muted-foreground">
              Opens and closes immediately on hover.
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={600} closeDelay={400}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Delayed</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-52">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">600ms open · 400ms close</div>
            <div className="text-sm text-muted-foreground">
              Waits before opening to reduce accidental triggers.
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}`

function HoverCardDelayDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Instant</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-52">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">No delay</div>
            <div className="text-sm text-muted-foreground">
              Opens and closes immediately on hover.
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={600} closeDelay={400}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Delayed</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-52">
          <div className="flex flex-col gap-1">
            <div className="font-semibold">600ms open · 400ms close</div>
            <div className="text-sm text-muted-foreground">
              Waits before opening to reduce accidental triggers.
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export {
  HoverCardBasicDemo,
  hoverCardBasicCode,
  HoverCardSidesDemo,
  hoverCardSidesCode,
  HoverCardDelayDemo,
  hoverCardDelayCode,
}
