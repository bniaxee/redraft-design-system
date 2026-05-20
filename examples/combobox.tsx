export {
  ComboboxBasicDemo,
  ComboboxGroupsDemo,
  ComboboxMultipleDemo,
  ComboboxPopupDemo,
  ComboboxInputAddonDemo,
  ComboboxDisabledDemo,
  ComboboxInvalidDemo,
  ComboboxClearDemo,
  ComboboxCustomItemsDemo,
} from "@/components/docs/examples/combobox-interactive"

// ── Basic ──────────────────────────────────────────────────────────────────────

export const comboboxBasicCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const languages = [
  "TypeScript", "JavaScript", "Python", "Rust",
  "Go", "Ruby", "Swift", "Kotlin",
] as const

export function ComboboxBasicDemo() {
  return (
    <Combobox items={languages}>
      <ComboboxInput placeholder="Select a language" />
      <ComboboxContent>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(lang) => (
            <ComboboxItem key={lang} value={lang}>
              {lang}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Groups ─────────────────────────────────────────────────────────────────────

export const comboboxGroupsCode = `import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox"

const timezones = [
  {
    value: "Americas",
    items: ["(GMT-5) New York", "(GMT-8) Los Angeles", "(GMT-6) Chicago", "(GMT-5) Toronto", "(GMT-3) São Paulo"],
  },
  {
    value: "Europe",
    items: ["(GMT+0) London", "(GMT+1) Paris", "(GMT+1) Berlin", "(GMT+1) Amsterdam"],
  },
  {
    value: "Asia / Pacific",
    items: ["(GMT+9) Tokyo", "(GMT+8) Singapore", "(GMT+8) Shanghai", "(GMT+11) Sydney"],
  },
] as const

export function ComboboxGroupsDemo() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < timezones.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Multiple selection ─────────────────────────────────────────────────────────

export const comboboxMultipleCode = `"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const tags = [
  "design", "engineering", "product", "marketing",
  "research", "operations", "finance", "legal",
] as const

export function ComboboxMultipleDemo() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox multiple autoHighlight items={tags} defaultValue={["design", "engineering"]}>
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {(values as string[]).map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add tags..." />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No tags found.</ComboboxEmpty>
        <ComboboxList>
          {(tag) => (
            <ComboboxItem key={tag} value={tag}>
              {tag}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Popup trigger ──────────────────────────────────────────────────────────────

export const comboboxPopupCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Button } from "@/components/ui/button"

const statuses = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "To Do" },
  { value: "in-progress", label: "In Progress" },
  { value: "in-review", label: "In Review" },
  { value: "done", label: "Done" },
  { value: "cancelled", label: "Cancelled" },
] as const

export function ComboboxPopupDemo() {
  return (
    <Combobox items={statuses} defaultValue={statuses[0]}>
      <ComboboxTrigger
        render={
          <Button variant="outline" className="w-48 justify-between font-normal" />
        }
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput showTrigger={false} placeholder="Search status..." />
        <ComboboxEmpty>No statuses found.</ComboboxEmpty>
        <ComboboxList>
          {(status) => (
            <ComboboxItem key={status.value} value={status}>
              {status.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Input addon ────────────────────────────────────────────────────────────────

export const comboboxInputAddonCode = `import { GlobeIcon } from "lucide-react"

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox"
import { InputGroupAddon } from "@/components/ui/input-group"

const timezones = [
  {
    value: "Americas",
    items: ["(GMT-5) New York", "(GMT-8) Los Angeles", "(GMT-6) Chicago"],
  },
  {
    value: "Europe",
    items: ["(GMT+0) London", "(GMT+1) Paris", "(GMT+1) Berlin"],
  },
  {
    value: "Asia / Pacific",
    items: ["(GMT+9) Tokyo", "(GMT+8) Singapore", "(GMT+11) Sydney"],
  },
] as const

export function ComboboxInputAddonDemo() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone">
        <InputGroupAddon>
          <GlobeIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent alignOffset={-28}>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Disabled ───────────────────────────────────────────────────────────────────

export const comboboxDisabledCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

export function ComboboxDisabledDemo() {
  return (
    <Combobox items={["TypeScript", "JavaScript", "Python"]} disabled>
      <ComboboxInput placeholder="Select a language" disabled />
      <ComboboxContent>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(lang) => (
            <ComboboxItem key={lang} value={lang}>
              {lang}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Clear button ───────────────────────────────────────────────────────────────

export const comboboxClearCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const languages = [
  "TypeScript", "JavaScript", "Python", "Rust", "Go", "Ruby",
] as const

export function ComboboxClearDemo() {
  return (
    <Combobox items={languages} defaultValue="TypeScript">
      <ComboboxInput placeholder="Select a language" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(lang) => (
            <ComboboxItem key={lang} value={lang}>
              {lang}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Custom item content ────────────────────────────────────────────────────────

export const comboboxCustomItemsCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

const teamMembers = [
  { id: "alice", name: "Alice Chen", role: "Product Designer" },
  { id: "bob", name: "Bob Martinez", role: "Frontend Engineer" },
  { id: "carol", name: "Carol Kim", role: "Backend Engineer" },
  { id: "david", name: "David Singh", role: "Product Manager" },
  { id: "emma", name: "Emma Taylor", role: "QA Engineer" },
  { id: "frank", name: "Frank Wilson", role: "DevOps Engineer" },
] as const

export function ComboboxCustomItemsDemo() {
  return (
    <Combobox items={teamMembers} itemToStringValue={(member) => member.name}>
      <ComboboxInput placeholder="Assign reviewer..." />
      <ComboboxContent>
        <ComboboxEmpty>No members found.</ComboboxEmpty>
        <ComboboxList>
          {(member) => (
            <ComboboxItem key={member.id} value={member}>
              <Item size="xs" className="p-0">
                <ItemContent>
                  <ItemTitle>{member.name}</ItemTitle>
                  <ItemDescription>{member.role}</ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`

// ── Invalid ────────────────────────────────────────────────────────────────────

export const comboboxInvalidCode = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

export function ComboboxInvalidDemo() {
  return (
    <Combobox items={["TypeScript", "JavaScript", "Python"]}>
      <ComboboxInput
        placeholder="Select a language"
        aria-invalid="true"
        className="border-destructive ring-3 ring-destructive/20 dark:ring-destructive/40"
      />
      <ComboboxContent>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(lang) => (
            <ComboboxItem key={lang} value={lang}>
              {lang}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`
