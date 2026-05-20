"use client"

import * as React from "react"
import { Columns3Icon, SlidersHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropdownMenuCheckboxItemsDemo() {
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
}

function DropdownMenuRadioGroupDemo() {
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
}

export { DropdownMenuCheckboxItemsDemo, DropdownMenuRadioGroupDemo }
