import {
  Columns3Icon,
  LinkIcon,
  MailIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  PencilIcon,
  ShareIcon,
  SlidersHorizontalIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  DropdownMenuCheckboxItemsDemo,
  DropdownMenuRadioGroupDemo,
} from "@/components/docs/examples/dropdown-menu-interactive"

// Basic

const dropdownMenuBasicCode = `import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <UserIcon data-icon="inline-start" />
          Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Changelog</DropdownMenuItem>
        <DropdownMenuItem>Help & support</DropdownMenuItem>
        <DropdownMenuItem disabled>API (coming soon)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

function DropdownMenuBasicDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <UserIcon data-icon="inline-start" />
          Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Changelog</DropdownMenuItem>
        <DropdownMenuItem>Help & support</DropdownMenuItem>
        <DropdownMenuItem disabled>API (coming soon)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// With icons and destructive action

const dropdownMenuDestructiveCode = `import { MoreHorizontalIcon, PencilIcon, ShareIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Post actions">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

function DropdownMenuDestructiveDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Post actions">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Checkbox items

const dropdownMenuCheckboxCode = `"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCheckboxItems() {
  const [showName, setShowName] = React.useState(true)
  const [showEmail, setShowEmail] = React.useState(true)
  const [showRole, setShowRole] = React.useState(false)
  const [showLastSeen, setShowLastSeen] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Columns3Icon data-icon="inline-start" />
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={showName} onCheckedChange={setShowName}>
            Name
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showEmail} onCheckedChange={setShowEmail}>
            Email
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showRole} onCheckedChange={setShowRole}>
            Role
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showLastSeen}
            onCheckedChange={setShowLastSeen}
          >
            Last seen
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

// Radio group

const dropdownMenuRadioCode = `"use client"

import * as React from "react"
import { SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroup() {
  const [sort, setSort] = React.useState("newest")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontalIcon data-icon="inline-start" />
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenuRadioItem value="newest">Newest first</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oldest">Oldest first</DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioItem value="name-az">Name A–Z</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="name-za">Name Z–A</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

// Submenu

const dropdownMenuSubmenuCode = `import { LinkIcon, MailIcon, MessageSquareIcon, ShareIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ShareIcon data-icon="inline-start" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LinkIcon />
            Copy link
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <MailIcon />
              Send via
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Slack</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More channels</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Teams</DropdownMenuItem>
                      <DropdownMenuItem>Discord</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Webhook</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MessageSquareIcon />
          Mention in a comment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

function DropdownMenuSubmenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ShareIcon data-icon="inline-start" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LinkIcon />
            Copy link
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <MailIcon />
              Send via
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Slack</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More channels</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Teams</DropdownMenuItem>
                      <DropdownMenuItem>Discord</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Webhook</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MessageSquareIcon />
          Mention in a comment
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export {
  DropdownMenuBasicDemo,
  dropdownMenuBasicCode,
  DropdownMenuDestructiveDemo,
  dropdownMenuDestructiveCode,
  DropdownMenuCheckboxItemsDemo,
  dropdownMenuCheckboxCode,
  DropdownMenuRadioGroupDemo,
  dropdownMenuRadioCode,
  DropdownMenuSubmenuDemo,
  dropdownMenuSubmenuCode,
}
