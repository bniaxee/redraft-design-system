import Link from "next/link"
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  ClockIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

const badgeDefaultCode = `import { Badge } from "@/components/ui/badge"

export function BadgeDefault() {
  return <Badge>Badge</Badge>
}`

function BadgeDefaultDemo() {
  return <Badge>Badge</Badge>
}

const badgeVariantsCode = `import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}`

function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}

const badgeIconCode = `import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  ClockIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function BadgeWithIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="secondary">
        <CheckCircle2Icon data-icon="inline-start" />
        Active
      </Badge>
      <Badge variant="outline">
        <ClockIcon data-icon="inline-start" />
        Pending
      </Badge>
      <Badge variant="destructive">
        <AlertTriangleIcon data-icon="inline-start" />
        Blocked
      </Badge>
    </div>
  )
}`

function BadgeWithIconsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="secondary">
        <CheckCircle2Icon data-icon="inline-start" />
        Active
      </Badge>
      <Badge variant="outline">
        <ClockIcon data-icon="inline-start" />
        Pending
      </Badge>
      <Badge variant="destructive">
        <AlertTriangleIcon data-icon="inline-start" />
        Blocked
      </Badge>
    </div>
  )
}

const badgeAsChildCode = `import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function BadgeAsChild() {
  return (
    <Badge asChild variant="outline">
      <Link href="/docs/components/badge">
        Badge docs
        <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </Badge>
  )
}`

function BadgeAsChildDemo() {
  return (
    <Badge asChild variant="outline">
      <Link href="/docs/components/badge">
        Badge docs
        <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </Badge>
  )
}

export {
  BadgeAsChildDemo,
  BadgeDefaultDemo,
  BadgeVariantsDemo,
  BadgeWithIconsDemo,
  badgeAsChildCode,
  badgeDefaultCode,
  badgeIconCode,
  badgeVariantsCode,
}
