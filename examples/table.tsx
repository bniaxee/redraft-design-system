import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  TableActionsDemo,
  TableSelectableDemo,
} from "@/components/docs/examples/table-interactive"

// --- Basic ---

const orders = [
  { id: "ORD-001", status: "Shipped", date: "Jan 12, 2025", amount: "$89.00" },
  {
    id: "ORD-002",
    status: "Processing",
    date: "Jan 14, 2025",
    amount: "$124.50",
  },
  {
    id: "ORD-003",
    status: "Delivered",
    date: "Jan 15, 2025",
    amount: "$64.00",
  },
  { id: "ORD-004", status: "Shipped", date: "Jan 16, 2025", amount: "$210.00" },
]

const tableBasicCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  { id: "ORD-001", status: "Shipped", date: "Jan 12, 2025", amount: "$89.00" },
  { id: "ORD-002", status: "Processing", date: "Jan 14, 2025", amount: "$124.50" },
  { id: "ORD-003", status: "Delivered", date: "Jan 15, 2025", amount: "$64.00" },
  { id: "ORD-004", status: "Shipped", date: "Jan 16, 2025", amount: "$210.00" },
]

export function TableBasic() {
  return (
    <Table>
      <TableCaption>Recent orders from the last 7 days.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$487.50</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`

function TableBasicDemo() {
  return (
    <Table>
      <TableCaption>Recent orders from the last 7 days.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell className="text-right">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$487.50</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

// --- Row actions ---

const tableActionsCode = `"use client"

import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const team = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Ben Carter", email: "ben@example.com", role: "Editor" },
  { name: "Clara Wu", email: "clara@example.com", role: "Viewer" },
]

export function TableActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team.map((member) => (
          <TableRow key={member.email}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`

// --- Table in card ---

const transactions = [
  {
    id: "TXN-4821",
    date: "Jan 16, 2025",
    description: "Software license",
    amount: "-$99.00",
  },
  {
    id: "TXN-4820",
    date: "Jan 15, 2025",
    description: "Cloud storage",
    amount: "-$12.00",
  },
  {
    id: "TXN-4819",
    date: "Jan 14, 2025",
    description: "Client payment",
    amount: "+$850.00",
  },
  {
    id: "TXN-4818",
    date: "Jan 13, 2025",
    description: "Domain renewal",
    amount: "-$18.00",
  },
  {
    id: "TXN-4817",
    date: "Jan 12, 2025",
    description: "Design assets",
    amount: "-$45.00",
  },
]

const tableInCardCode = `import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const transactions = [
  { id: "TXN-4821", date: "Jan 16, 2025", description: "Software license", amount: "-$99.00" },
  { id: "TXN-4820", date: "Jan 15, 2025", description: "Cloud storage", amount: "-$12.00" },
  { id: "TXN-4819", date: "Jan 14, 2025", description: "Client payment", amount: "+$850.00" },
  { id: "TXN-4818", date: "Jan 13, 2025", description: "Domain renewal", amount: "-$18.00" },
  { id: "TXN-4817", date: "Jan 12, 2025", description: "Design assets", amount: "-$45.00" },
]

export function TableInCard() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b px-6 py-4">
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Last 5 transactions on your account.</CardDescription>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-medium">{tx.id}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.description}</TableCell>
              <TableCell className="text-right">{tx.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}`

function TableInCardDemo() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b px-6 py-4">
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Last 5 transactions on your account.</CardDescription>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-medium">{tx.id}</TableCell>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.description}</TableCell>
              <TableCell className="text-right">{tx.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

// --- Rich cells ---

const memberColors: Record<string, string> = {
  AL: "bg-sky-100 text-sky-700",
  BK: "bg-violet-100 text-violet-700",
  CM: "bg-emerald-100 text-emerald-700",
  DR: "bg-amber-100 text-amber-700",
  EF: "bg-rose-100 text-rose-700",
  GH: "bg-orange-100 text-orange-700",
}

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

const projects: Array<{
  name: string
  description: string
  members: string[]
  status: { label: string; variant: BadgeVariant }
  priority: { label: string; variant: BadgeVariant }
}> = [
  {
    name: "Dashboard redesign",
    description: "Modernize the analytics UI",
    members: ["AL", "BK", "CM", "DR", "EF"],
    status: { label: "In Progress", variant: "default" },
    priority: { label: "High", variant: "destructive" },
  },
  {
    name: "API integration",
    description: "Connect third-party payment providers",
    members: ["BK", "CM"],
    status: { label: "On Hold", variant: "secondary" },
    priority: { label: "Medium", variant: "secondary" },
  },
  {
    name: "Mobile app",
    description: "iOS and Android client",
    members: ["CM", "DR", "EF", "AL", "GH"],
    status: { label: "In Progress", variant: "default" },
    priority: { label: "High", variant: "destructive" },
  },
  {
    name: "Documentation",
    description: "Developer guides and API reference",
    members: ["EF", "AL"],
    status: { label: "Completed", variant: "outline" },
    priority: { label: "Low", variant: "outline" },
  },
  {
    name: "Analytics engine",
    description: "Real-time event processing pipeline",
    members: ["DR", "BK", "CM", "AL"],
    status: { label: "Planned", variant: "secondary" },
    priority: { label: "Medium", variant: "secondary" },
  },
]

function MemberAvatars({ members }: { members: string[] }) {
  const visible = members.slice(0, 3)
  const overflow = members.length - visible.length
  return (
    <div className="flex items-center -space-x-2">
      {visible.map((initials) => (
        <Avatar key={initials} className="size-7 ring-2 ring-background">
          <AvatarFallback className={cn("text-xs", memberColors[initials])}>
            {initials}
          </AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <div className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium ring-2 ring-background">
          +{overflow}
        </div>
      )}
    </div>
  )
}

const tableRichCode = `import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const memberColors: Record<string, string> = {
  AL: "bg-sky-100 text-sky-700",
  BK: "bg-violet-100 text-violet-700",
  CM: "bg-emerald-100 text-emerald-700",
  DR: "bg-amber-100 text-amber-700",
  EF: "bg-rose-100 text-rose-700",
  GH: "bg-orange-100 text-orange-700",
}

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

const projects: Array<{
  name: string
  description: string
  members: string[]
  status: { label: string; variant: BadgeVariant }
  priority: { label: string; variant: BadgeVariant }
}> = [
  {
    name: "Dashboard redesign",
    description: "Modernize the analytics UI",
    members: ["AL", "BK", "CM", "DR", "EF"],
    status: { label: "In Progress", variant: "default" },
    priority: { label: "High", variant: "destructive" },
  },
  {
    name: "API integration",
    description: "Connect third-party payment providers",
    members: ["BK", "CM"],
    status: { label: "On Hold", variant: "secondary" },
    priority: { label: "Medium", variant: "secondary" },
  },
  {
    name: "Mobile app",
    description: "iOS and Android client",
    members: ["CM", "DR", "EF", "AL", "GH"],
    status: { label: "In Progress", variant: "default" },
    priority: { label: "High", variant: "destructive" },
  },
  {
    name: "Documentation",
    description: "Developer guides and API reference",
    members: ["EF", "AL"],
    status: { label: "Completed", variant: "outline" },
    priority: { label: "Low", variant: "outline" },
  },
  {
    name: "Analytics engine",
    description: "Real-time event processing pipeline",
    members: ["DR", "BK", "CM", "AL"],
    status: { label: "Planned", variant: "secondary" },
    priority: { label: "Medium", variant: "secondary" },
  },
]

function MemberAvatars({ members }: { members: string[] }) {
  const visible = members.slice(0, 3)
  const overflow = members.length - visible.length
  return (
    <div className="flex items-center -space-x-2">
      {visible.map((initials) => (
        <Avatar key={initials} className="size-7 ring-2 ring-background">
          <AvatarFallback className={cn("text-xs", memberColors[initials])}>
            {initials}
          </AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && (
        <div className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium ring-2 ring-background">
          +{overflow}
        </div>
      )}
    </div>
  )
}

export function TableRich() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Members</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell>
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">
                  {project.description}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <MemberAvatars members={project.members} />
            </TableCell>
            <TableCell>
              <Badge variant={project.status.variant}>{project.status.label}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant={project.priority.variant}>{project.priority.label}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`

function TableRichDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Members</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell>
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">
                  {project.description}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <MemberAvatars members={project.members} />
            </TableCell>
            <TableCell>
              <Badge variant={project.status.variant}>
                {project.status.label}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={project.priority.variant}>
                {project.priority.label}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

// --- Selectable rows ---

const tableSelectableCode = `"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const members = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: "2", name: "Ben Carter", email: "ben@example.com", role: "Editor" },
  { id: "3", name: "Clara Wu", email: "clara@example.com", role: "Viewer" },
  { id: "4", name: "David Park", email: "david@example.com", role: "Viewer" },
]

export function TableSelectable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set())

  const selectAll = selectedRows.size === members.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(members.map((m) => m.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedRows)
    if (checked) {
      next.add(id)
    } else {
      next.delete(id)
    }
    setSelectedRows(next)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              checked={selectAll}
              onCheckedChange={handleSelectAll}
              aria-label="Select all"
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow
            key={member.id}
            data-state={selectedRows.has(member.id) ? "selected" : undefined}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.has(member.id)}
                onCheckedChange={(checked) =>
                  handleSelectRow(member.id, checked === true)
                }
                aria-label={\`Select \${member.name}\`}
              />
            </TableCell>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>{member.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`

export {
  TableBasicDemo,
  tableBasicCode,
  TableActionsDemo,
  tableActionsCode,
  TableInCardDemo,
  tableInCardCode,
  TableRichDemo,
  tableRichCode,
  TableSelectableDemo,
  tableSelectableCode,
}
