"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

// --- Row actions ---

const team = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Ben Carter", email: "ben@example.com", role: "Editor" },
  { name: "Clara Wu", email: "clara@example.com", role: "Viewer" },
]

export function TableActionsDemo() {
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
}

// --- Selectable rows ---

const members = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: "2", name: "Ben Carter", email: "ben@example.com", role: "Editor" },
  { id: "3", name: "Clara Wu", email: "clara@example.com", role: "Viewer" },
  { id: "4", name: "David Park", email: "david@example.com", role: "Viewer" },
]

export function TableSelectableDemo() {
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
                aria-label={`Select ${member.name}`}
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
}
