"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ── Basic ─────────────────────────────────────────────────────────────────────

const selectBasicCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBasicDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

function SelectBasicDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

// ── Sizes ─────────────────────────────────────────────────────────────────────

const selectSizesCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectSizesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="default">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}`

function SelectSizesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="default">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

// ── Groups and labels ─────────────────────────────────────────────────────────

const selectGroupsCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectGroupsDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

function SelectGroupsDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

// ── Disabled ──────────────────────────────────────────────────────────────────

const selectDisabledCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Disabled item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b" disabled>
              Option B (unavailable)
            </SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}`

function SelectDisabledDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Disabled item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b" disabled>
              Option B (unavailable)
            </SelectItem>
            <SelectItem value="c">Option C</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

// ── Scrollable ────────────────────────────────────────────────────────────────

const selectScrollableCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollableDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="utc-12">UTC−12:00 Baker Island</SelectItem>
          <SelectItem value="utc-11">UTC−11:00 Pago Pago</SelectItem>
          <SelectItem value="utc-10">UTC−10:00 Honolulu</SelectItem>
          <SelectItem value="utc-9">UTC−09:00 Anchorage</SelectItem>
          <SelectItem value="utc-8">UTC−08:00 Los Angeles</SelectItem>
          <SelectItem value="utc-7">UTC−07:00 Denver</SelectItem>
          <SelectItem value="utc-6">UTC−06:00 Chicago</SelectItem>
          <SelectItem value="utc-5">UTC−05:00 New York</SelectItem>
          <SelectItem value="utc-4">UTC−04:00 Halifax</SelectItem>
          <SelectItem value="utc-3">UTC−03:00 São Paulo</SelectItem>
          <SelectItem value="utc-2">UTC−02:00 South Georgia</SelectItem>
          <SelectItem value="utc-1">UTC−01:00 Azores</SelectItem>
          <SelectItem value="utc-0">UTC±00:00 London</SelectItem>
          <SelectItem value="utc+1">UTC+01:00 Paris</SelectItem>
          <SelectItem value="utc+2">UTC+02:00 Cairo</SelectItem>
          <SelectItem value="utc+3">UTC+03:00 Moscow</SelectItem>
          <SelectItem value="utc+4">UTC+04:00 Dubai</SelectItem>
          <SelectItem value="utc+5">UTC+05:00 Karachi</SelectItem>
          <SelectItem value="utc+5.5">UTC+05:30 Mumbai</SelectItem>
          <SelectItem value="utc+6">UTC+06:00 Dhaka</SelectItem>
          <SelectItem value="utc+7">UTC+07:00 Bangkok</SelectItem>
          <SelectItem value="utc+8">UTC+08:00 Singapore</SelectItem>
          <SelectItem value="utc+9">UTC+09:00 Tokyo</SelectItem>
          <SelectItem value="utc+10">UTC+10:00 Sydney</SelectItem>
          <SelectItem value="utc+12">UTC+12:00 Auckland</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

function SelectScrollableDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="utc-12">UTC−12:00 Baker Island</SelectItem>
          <SelectItem value="utc-11">UTC−11:00 Pago Pago</SelectItem>
          <SelectItem value="utc-10">UTC−10:00 Honolulu</SelectItem>
          <SelectItem value="utc-9">UTC−09:00 Anchorage</SelectItem>
          <SelectItem value="utc-8">UTC−08:00 Los Angeles</SelectItem>
          <SelectItem value="utc-7">UTC−07:00 Denver</SelectItem>
          <SelectItem value="utc-6">UTC−06:00 Chicago</SelectItem>
          <SelectItem value="utc-5">UTC−05:00 New York</SelectItem>
          <SelectItem value="utc-4">UTC−04:00 Halifax</SelectItem>
          <SelectItem value="utc-3">UTC−03:00 São Paulo</SelectItem>
          <SelectItem value="utc-2">UTC−02:00 South Georgia</SelectItem>
          <SelectItem value="utc-1">UTC−01:00 Azores</SelectItem>
          <SelectItem value="utc-0">UTC±00:00 London</SelectItem>
          <SelectItem value="utc+1">UTC+01:00 Paris</SelectItem>
          <SelectItem value="utc+2">UTC+02:00 Cairo</SelectItem>
          <SelectItem value="utc+3">UTC+03:00 Moscow</SelectItem>
          <SelectItem value="utc+4">UTC+04:00 Dubai</SelectItem>
          <SelectItem value="utc+5">UTC+05:00 Karachi</SelectItem>
          <SelectItem value="utc+5.5">UTC+05:30 Mumbai</SelectItem>
          <SelectItem value="utc+6">UTC+06:00 Dhaka</SelectItem>
          <SelectItem value="utc+7">UTC+07:00 Bangkok</SelectItem>
          <SelectItem value="utc+8">UTC+08:00 Singapore</SelectItem>
          <SelectItem value="utc+9">UTC+09:00 Tokyo</SelectItem>
          <SelectItem value="utc+10">UTC+10:00 Sydney</SelectItem>
          <SelectItem value="utc+12">UTC+12:00 Auckland</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

// ── Alignment ─────────────────────────────────────────────────────────────────

const selectAlignmentCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectAlignmentDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">item-aligned (default)</span>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">popper</span>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}`

function SelectAlignmentDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">item-aligned (default)</span>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">popper</span>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

// ── Invalid ───────────────────────────────────────────────────────────────────

const selectInvalidCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectInvalidDemo() {
  return (
    <Select>
      <SelectTrigger aria-invalid>
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

function SelectInvalidDemo() {
  return (
    <Select>
      <SelectTrigger aria-invalid>
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export {
  SelectBasicDemo,
  selectBasicCode,
  SelectSizesDemo,
  selectSizesCode,
  SelectGroupsDemo,
  selectGroupsCode,
  SelectDisabledDemo,
  selectDisabledCode,
  SelectScrollableDemo,
  selectScrollableCode,
  SelectAlignmentDemo,
  selectAlignmentCode,
  SelectInvalidDemo,
  selectInvalidCode,
}
