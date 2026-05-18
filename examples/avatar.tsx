import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Basic

const avatarBasicCode = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarBasic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}`

function AvatarBasicDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}

// Sizes

const avatarSizesCode = `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`

function AvatarSizesDemo() {
  return (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}

// With badge

const avatarWithBadgeCode = `import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@/components/ui/avatar"

export function AvatarWithBadge() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-end gap-4">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
          <AvatarBadge className="bg-yellow-500" />
        </Avatar>
        <Avatar>
          <AvatarFallback>EF</AvatarFallback>
          <AvatarBadge className="bg-red-500" />
        </Avatar>
      </div>
    </div>
  )
}`

function AvatarWithBadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-end gap-4">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge className="bg-green-500" />
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
          <AvatarBadge className="bg-yellow-500" />
        </Avatar>
        <Avatar>
          <AvatarFallback>EF</AvatarFallback>
          <AvatarBadge className="bg-red-500" />
        </Avatar>
      </div>
    </div>
  )
}

// Avatar group

const avatarGroupCode = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"

export function AvatarGroupBasic() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>WK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}`

function AvatarGroupBasicDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>WK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MR</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}

// Avatar group with count

const avatarGroupCountCode = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

export function AvatarGroupWithCount() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>WK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PT</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  )
}`

function AvatarGroupWithCountDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>WK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PT</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  )
}

// Dropdown avatar

const avatarDropdownCode = `import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`

function AvatarDropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export {
  AvatarBasicDemo,
  AvatarSizesDemo,
  AvatarWithBadgeDemo,
  AvatarGroupBasicDemo,
  AvatarGroupWithCountDemo,
  AvatarDropdownDemo,
  avatarBasicCode,
  avatarSizesCode,
  avatarWithBadgeCode,
  avatarGroupCode,
  avatarGroupCountCode,
  avatarDropdownCode,
}
