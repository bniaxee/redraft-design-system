import Link from "next/link"
import {
  ArrowRightIcon,
  DownloadIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SaveIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const buttonDefaultCode = `import { Button } from "@/components/ui/button"

export function ButtonDefault() {
  return <Button>Button</Button>
}`

function ButtonDefaultDemo() {
  return <Button>Button</Button>
}

const buttonVariantsCode = `import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`

function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

const buttonSizesCode = `import { Button } from "@/components/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`

function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

const buttonIconCode = `import { ArrowRightIcon, DownloadIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>
        <PlusIcon data-icon="inline-start" />
        New project
      </Button>
      <Button variant="outline">
        Download
        <DownloadIcon data-icon="inline-end" />
      </Button>
      <Button variant="secondary">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}`

function ButtonWithIconsDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>
        <PlusIcon data-icon="inline-start" />
        New project
      </Button>
      <Button variant="outline">
        Download
        <DownloadIcon data-icon="inline-end" />
      </Button>
      <Button variant="secondary">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}

const buttonIconOnlyCode = `import { MoreHorizontalIcon, PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonIconOnly() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="icon-xs" variant="outline" aria-label="Add item">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="secondary" aria-label="More options">
        <MoreHorizontalIcon />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="Delete item">
        <Trash2Icon />
      </Button>
    </div>
  )
}`

function ButtonIconOnlyDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="icon-xs" variant="outline" aria-label="Add item">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="secondary" aria-label="More options">
        <MoreHorizontalIcon />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="Delete item">
        <Trash2Icon />
      </Button>
    </div>
  )
}

const buttonFormActionsCode = `import { SaveIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonFormActions() {
  return (
    <div className="flex w-fit items-center gap-2 rounded-3xl border bg-background p-4">
      <Button variant="ghost">Cancel</Button>
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save changes
      </Button>
    </div>
  )
}`

function ButtonFormActionsDemo() {
  return (
    <div className="flex w-fit items-center gap-2 rounded-3xl border bg-background p-4">
      <Button variant="ghost">Cancel</Button>
      <Button>
        <SaveIcon data-icon="inline-start" />
        Save changes
      </Button>
    </div>
  )
}

const buttonAsChildCode = `import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/docs/components/button">Read the button docs</Link>
    </Button>
  )
}`

function ButtonAsChildDemo() {
  return (
    <Button asChild>
      <Link href="/docs/components/button">Read the button docs</Link>
    </Button>
  )
}

export {
  ButtonAsChildDemo,
  ButtonDefaultDemo,
  ButtonFormActionsDemo,
  ButtonIconOnlyDemo,
  ButtonSizesDemo,
  ButtonVariantsDemo,
  ButtonWithIconsDemo,
  buttonAsChildCode,
  buttonDefaultCode,
  buttonFormActionsCode,
  buttonIconOnlyCode,
  buttonIconCode,
  buttonSizesCode,
  buttonVariantsCode,
}
