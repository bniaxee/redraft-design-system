import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { DrawerResponsiveDemo } from "@/components/docs/examples/drawer-client"

// ─── Basic ────────────────────────────────────────────────────────────────────

const drawerBasicCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export function DrawerBasic() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Leave feedback</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share feedback</DrawerTitle>
          <DrawerDescription>
            Tell us what you think about this feature.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`

function DrawerBasicDemo() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Leave feedback</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share feedback</DrawerTitle>
          <DrawerDescription>
            Tell us what you think about this feature.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

// ─── Directions ───────────────────────────────────────────────────────────────

const DRAWER_DIRECTIONS = ["bottom", "top", "left", "right"] as const

const drawerDirectionsCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const DRAWER_DIRECTIONS = ["bottom", "top", "left", "right"] as const

export function DrawerDirections() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_DIRECTIONS.map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {direction}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>Notification settings</DrawerTitle>
              <DrawerDescription>
                Choose which alerts you want to receive.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Save preferences</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}`

function DrawerDirectionsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_DIRECTIONS.map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {direction}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>Notification settings</DrawerTitle>
              <DrawerDescription>
                Choose which alerts you want to receive.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Save preferences</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}

// ─── Scrollable content ───────────────────────────────────────────────────────

const changelog = [
  {
    version: "2.4.0",
    note: "Added multi-step form support and improved keyboard navigation.",
  },
  {
    version: "2.3.1",
    note: "Fixed a rendering bug in Safari and improved contrast ratios.",
  },
  {
    version: "2.3.0",
    note: "New icon library with 200 additional symbols.",
  },
  {
    version: "2.2.0",
    note: "Introduced dark mode support across all components.",
  },
  {
    version: "2.1.2",
    note: "Improved performance for large data tables.",
  },
  {
    version: "2.1.0",
    note: "Added Drawer and Sheet components.",
  },
  {
    version: "2.0.0",
    note: "Major redesign with updated typography and spacing.",
  },
  {
    version: "1.9.0",
    note: "Introduced token-based theming and CSS variable support.",
  },
  {
    version: "1.8.2",
    note: "Resolved focus ring inconsistencies across Firefox and Chrome.",
  },
  {
    version: "1.8.0",
    note: "New Chart component built on Recharts with unified config API.",
  },
  {
    version: "1.7.1",
    note: "Fixed broken exports in the ESM build for tree-shaking.",
  },
  {
    version: "1.7.0",
    note: "Added Combobox and Command components with search support.",
  },
  {
    version: "1.6.0",
    note: "Carousel component with Embla under the hood.",
  },
  {
    version: "1.5.3",
    note: "Accessibility audit pass — updated ARIA roles across all overlays.",
  },
]

const drawerScrollableCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const changelog = [
  { version: "2.4.0", note: "Added multi-step form support and improved keyboard navigation." },
  { version: "2.3.1", note: "Fixed a rendering bug in Safari and improved contrast ratios." },
  { version: "2.3.0", note: "New icon library with 200 additional symbols." },
  { version: "2.2.0", note: "Introduced dark mode support across all components." },
  { version: "2.1.2", note: "Improved performance for large data tables." },
  { version: "2.1.0", note: "Added Drawer and Sheet components." },
  { version: "2.0.0", note: "Major redesign with updated typography and spacing." },
  { version: "1.9.0", note: "Introduced token-based theming and CSS variable support." },
  { version: "1.8.2", note: "Resolved focus ring inconsistencies across Firefox and Chrome." },
  { version: "1.8.0", note: "New Chart component built on Recharts with unified config API." },
  { version: "1.7.1", note: "Fixed broken exports in the ESM build for tree-shaking." },
  { version: "1.7.0", note: "Added Combobox and Command components with search support." },
  { version: "1.6.0", note: "Carousel component with Embla under the hood." },
  { version: "1.5.3", note: "Accessibility audit pass — updated ARIA roles across all overlays." },
]

export function DrawerScrollable() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">View changelog</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Changelog</DrawerTitle>
          <DrawerDescription>Recent updates and release notes.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar flex-1 overflow-y-auto px-4">
          {changelog.map(({ version, note }) => (
            <div key={version} className="mb-4">
              <p className="text-sm font-medium">v{version}</p>
              <p className="text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`

function DrawerScrollableDemo() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">View changelog</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Changelog</DrawerTitle>
          <DrawerDescription>Recent updates and release notes.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar flex-1 overflow-y-auto px-4">
          {changelog.map(({ version, note }) => (
            <div key={version} className="mb-4">
              <p className="text-sm font-medium">v{version}</p>
              <p className="text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

// ─── Scrollable with two actions ─────────────────────────────────────────────

const exportItems = [
  { label: "Profile & account details", detail: "Name, email, avatar" },
  { label: "Posts and comments", detail: "143 items" },
  { label: "Media uploads", detail: "28 files" },
  { label: "Connections and follows", detail: "Mutual follows included" },
  { label: "Message history", detail: "All conversations" },
  { label: "Activity log", detail: "Last 90 days" },
  { label: "Saved items and bookmarks", detail: "All collections" },
]

const drawerTwoActionsCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const exportItems = [
  { label: "Profile & account details", detail: "Name, email, avatar" },
  { label: "Posts and comments", detail: "143 items" },
  { label: "Media uploads", detail: "28 files" },
  { label: "Connections and follows", detail: "Mutual follows included" },
  { label: "Message history", detail: "All conversations" },
  { label: "Activity log", detail: "Last 90 days" },
  { label: "Saved items and bookmarks", detail: "All collections" },
]

export function DrawerTwoActions() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Export data</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Export your data</DrawerTitle>
            <DrawerDescription>
              The following will be included in your export.
            </DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar max-h-[40vh] overflow-y-auto px-4">
            {exportItems.map(({ label, detail }) => (
              <div key={label} className="mb-3">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Export</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}`

function DrawerTwoActionsDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Export data</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Export your data</DrawerTitle>
            <DrawerDescription>
              The following will be included in your export.
            </DrawerDescription>
          </DrawerHeader>
          <div className="no-scrollbar max-h-[40vh] overflow-y-auto px-4">
            {exportItems.map(({ label, detail }) => (
              <div key={label} className="mb-3">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
            <Button>Export</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// ─── Responsive dialog ────────────────────────────────────────────────────────

const drawerResponsiveCode = `"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"

export function DrawerResponsive() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Update your display name and email address.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Update your display name and email address.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <ProfileForm />
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="profile-name" className="text-sm font-medium">
          Name
        </label>
        <Input id="profile-name" defaultValue="Alex Johnson" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="profile-email" className="text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          id="profile-email"
          defaultValue="alex@example.com"
        />
      </div>
    </div>
  )
}`

export {
  DrawerBasicDemo,
  drawerBasicCode,
  DrawerDirectionsDemo,
  drawerDirectionsCode,
  DrawerScrollableDemo,
  drawerScrollableCode,
  DrawerTwoActionsDemo,
  drawerTwoActionsCode,
  DrawerResponsiveDemo,
  drawerResponsiveCode,
}
