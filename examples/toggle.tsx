import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const toggleDefaultCode = `import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDefault() {
  return (
    <Toggle defaultPressed aria-label="Toggle bookmark">
      <BookmarkIcon
        data-icon="inline-start"
        className="fill-transparent transition-colors group-data-[state=on]/toggle:fill-current"
      />
      Bookmark
    </Toggle>
  )
}`

function ToggleDefaultDemo() {
  return (
    <Toggle defaultPressed aria-label="Toggle bookmark">
      <BookmarkIcon
        data-icon="inline-start"
        className="fill-transparent transition-colors group-data-[state=on]/toggle:fill-current"
      />
      Bookmark
    </Toggle>
  )
}

const toggleOutlineCode = `import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon data-icon="inline-start" />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon data-icon="inline-start" />
        Bold
      </Toggle>
    </div>
  )
}`

function ToggleOutlineDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon data-icon="inline-start" />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon data-icon="inline-start" />
        Bold
      </Toggle>
    </div>
  )
}

const toggleSizesCode = `import { Toggle } from "@/components/ui/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle variant="outline" size="sm">Small</Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle variant="outline" size="lg">Large</Toggle>
    </div>
  )
}`

function ToggleSizesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle variant="outline" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle variant="outline" size="lg">
        Large
      </Toggle>
    </div>
  )
}

const toggleWithTextCode = `import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon data-icon="inline-start" />
      Italic
    </Toggle>
  )
}`

function ToggleWithTextDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon data-icon="inline-start" />
      Italic
    </Toggle>
  )
}

const toggleDisabledCode = `import { Toggle } from "@/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle disabled>Disabled</Toggle>
      <Toggle variant="outline" disabled>Disabled</Toggle>
    </div>
  )
}`

function ToggleDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Toggle disabled>Disabled</Toggle>
      <Toggle variant="outline" disabled>
        Disabled
      </Toggle>
    </div>
  )
}

export {
  ToggleDefaultDemo,
  ToggleDisabledDemo,
  ToggleOutlineDemo,
  ToggleSizesDemo,
  ToggleWithTextDemo,
  toggleDefaultCode,
  toggleDisabledCode,
  toggleOutlineCode,
  toggleSizesCode,
  toggleWithTextCode,
}
