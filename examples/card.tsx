import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const cardDefaultCode = `import { ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDefault() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Quarterly plan</CardTitle>
        <CardDescription>
          Three priorities are ready for review.
        </CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            Open
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">18</div>
            <div className="text-muted-foreground">Tasks</div>
          </div>
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">7</div>
            <div className="text-muted-foreground">Owners</div>
          </div>
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">92%</div>
            <div className="text-muted-foreground">Aligned</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <CheckCircle2Icon className="size-4 text-emerald-600" />
          Updated today
        </span>
        <Badge variant="secondary">Ready</Badge>
      </CardFooter>
    </Card>
  )
}`

function CardDefaultDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Quarterly plan</CardTitle>
        <CardDescription>
          Three priorities are ready for review.
        </CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            Open
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">18</div>
            <div className="text-muted-foreground">Tasks</div>
          </div>
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">7</div>
            <div className="text-muted-foreground">Owners</div>
          </div>
          <div className="rounded-3xl bg-muted/60 p-3">
            <div className="text-2xl font-medium">92%</div>
            <div className="text-muted-foreground">Aligned</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <CheckCircle2Icon className="size-4 text-emerald-600" />
          Updated today
        </span>
        <Badge variant="secondary">Ready</Badge>
      </CardFooter>
    </Card>
  )
}

const cardSizesCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardSizes() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Default card</CardTitle>
          <CardDescription>
            Room for summaries, actions, and richer content.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Use the default size for primary content blocks.
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardTitle>Small card</CardTitle>
          <CardDescription>
            Tighter spacing for compact supporting content.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Use small cards in sidebars, lists, and dense dashboards.
        </CardContent>
      </Card>
    </div>
  )
}`

function CardSizesDemo() {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Default card</CardTitle>
          <CardDescription>
            Room for summaries, actions, and richer content.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Use the default size for primary content blocks.
        </CardContent>
      </Card>

      <Card size="sm">
        <CardHeader>
          <CardTitle>Small card</CardTitle>
          <CardDescription>
            Tighter spacing for compact supporting content.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Use small cards in sidebars, lists, and dense dashboards.
        </CardContent>
      </Card>
    </div>
  )
}

const cardFormCode = `import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Billing contact</CardTitle>
        <CardDescription>
          Send account notices to the right person.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Avery Stone" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="avery@example.com" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Save</Button>
      </CardFooter>
    </Card>
  )
}`

function CardFormDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Billing contact</CardTitle>
        <CardDescription>
          Send account notices to the right person.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Avery Stone" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="avery@example.com" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Save</Button>
      </CardFooter>
    </Card>
  )
}

const cardMediaCode = `import { CalendarDaysIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardMedia() {
  return (
    <Card className="w-full max-w-sm">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        alt="A calm workspace with a laptop and notebook"
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Design review</CardTitle>
        <CardDescription>
          Share the deck and agenda before the team walkthrough.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Include open questions, owner notes, and the latest prototype link.
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <CalendarDaysIcon className="size-4" />
          Jun 18
        </span>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}`

function CardMediaDemo() {
  return (
    <Card className="w-full max-w-sm">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        alt="A calm workspace with a laptop and notebook"
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Design review</CardTitle>
        <CardDescription>
          Share the deck and agenda before the team walkthrough.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Include open questions, owner notes, and the latest prototype link.
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <CalendarDaysIcon className="size-4" />
          Jun 18
        </span>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}

export {
  CardDefaultDemo,
  CardFormDemo,
  CardMediaDemo,
  CardSizesDemo,
  cardDefaultCode,
  cardFormCode,
  cardMediaCode,
  cardSizesCode,
}
