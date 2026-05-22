import { DataTableDemo } from "./data-table-interactive"

const dataTableCode = `"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Task = {
  id: string
  title: string
  status: "todo" | "in-progress" | "done" | "cancelled"
  priority: "low" | "medium" | "high"
  assignee: string
}

const data: Task[] = [
  {
    id: "TASK-001",
    title: "Design system audit",
    status: "in-progress",
    priority: "high",
    assignee: "alex@example.com",
  },
  {
    id: "TASK-002",
    title: "Update API documentation",
    status: "done",
    priority: "low",
    assignee: "sam@example.com",
  },
  {
    id: "TASK-003",
    title: "Fix navigation overflow",
    status: "todo",
    priority: "medium",
    assignee: "alex@example.com",
  },
  {
    id: "TASK-004",
    title: "Write integration tests",
    status: "in-progress",
    priority: "high",
    assignee: "riley@example.com",
  },
  {
    id: "TASK-005",
    title: "Deploy to staging",
    status: "todo",
    priority: "medium",
    assignee: "sam@example.com",
  },
]

const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        {(row.getValue("status") as string).replace("-", " ")}
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("priority")}</div>
    ),
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Assignee
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("assignee")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-xs">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(task.id)}
              >
                Copy task ID
              </DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Reassign</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Filter by assignee..."
          value={
            (columnFilters.find((f) => f.id === "assignee")?.value as string) ??
            ""
          }
          onChange={(event) => {
            const val = event.target.value
            setColumnFilters(
              val ? [{ id: "assignee", value: val }] : []
            )
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}`

import {
  DataTableGlobalFilterDemo,
  DataTableRichCellsDemo,
} from "./data-table-interactive"

const dataTableGlobalFilterCode = `"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Contact = {
  id: string
  name: string
  email: string
  role: string
  department: string
}

const contacts: Contact[] = [
  { id: "1", name: "Alex Kim", email: "alex@example.com", role: "Designer", department: "Product" },
  { id: "2", name: "Sam Chen", email: "sam@example.com", role: "Engineer", department: "Platform" },
  { id: "3", name: "Riley Park", email: "riley@example.com", role: "Manager", department: "Product" },
  { id: "4", name: "Jordan Lee", email: "jordan@example.com", role: "Engineer", department: "Data" },
  { id: "5", name: "Casey Morgan", email: "casey@example.com", role: "Designer", department: "Brand" },
]

const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Department
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
  },
]

export function DataTableGlobalFilterDemo() {
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    state: {
      globalFilter,
      sorting,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search all columns..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} result(s).
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}`

const dataTableRichCellsCode = `"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Project = {
  id: string
  name: string
  description: string
  members: { initials: string }[]
  status: "on-track" | "at-risk" | "blocked" | "completed"
  priority: "high" | "medium" | "low"
  category: "Frontend" | "Backend" | "Design" | "DevOps" | "Data"
  due: string
  budget: number
  progress: number
  owner: string
  phase: "Planning" | "Development" | "Testing" | "Shipped"
  department: "Engineering" | "Product" | "Design" | "Infrastructure" | "Data"
}

const names = [
  "API Redesign", "Mobile App v2", "Design System", "Analytics Dashboard",
  "Onboarding Flow", "Auth Service", "Search Infrastructure", "Billing Portal",
  "Email Notifications", "Admin Panel", "Data Pipeline", "CI/CD Migration",
  "Documentation Site", "Feature Flags", "Accessibility Audit",
  "Performance Monitor", "Dark Mode Support", "Localization", "Webhook Integration",
  "Rate Limiter",
]

const descriptions = [
  "RESTful endpoints migration", "iOS and Android refresh", "Component library update",
  "Usage metrics and reporting", "New user experience", "OAuth and SSO support",
  "Full-text indexing", "Subscription management", "Transactional templates",
  "Role management", "ETL and warehousing", "GitHub Actions workflow",
  "Developer reference", "A/B testing service", "WCAG 2.1 compliance",
  "Core Web Vitals", "Theme switching", "i18n and l10n", "Event streaming", "API throttling",
]

const memberSets = [
  [{ initials: "AK" }, { initials: "SC" }],
  [{ initials: "RP" }, { initials: "JL" }],
  [{ initials: "CM" }, { initials: "AK" }],
  [{ initials: "SC" }, { initials: "RP" }, { initials: "JL" }],
  [{ initials: "AK" }, { initials: "CM" }, { initials: "RP" }],
  [{ initials: "JL" }, { initials: "SC" }],
  [{ initials: "CM" }],
  [{ initials: "AK" }, { initials: "RP" }, { initials: "SC" }, { initials: "JL" }],
  [{ initials: "SC" }, { initials: "CM" }],
  [{ initials: "RP" }, { initials: "AK" }],
]

const statuses: Project["status"][] = ["on-track", "at-risk", "on-track", "blocked", "completed"]
const priorities: Project["priority"][] = ["high", "medium", "low", "medium", "high", "low"]
const categories: Project["category"][] = ["Frontend", "Backend", "Design", "DevOps", "Data"]
const dues = [
  "Jan 8, 2025", "Feb 14, 2025", "Mar 3, 2025", "Apr 20, 2025", "May 1, 2025",
  "Jun 15, 2025", "Jul 4, 2025", "Aug 22, 2025", "Sep 9, 2025", "Oct 31, 2025",
]
const budgets = [12000, 45000, 8500, 120000, 67500, 230000, 15000, 88000, 34000, 195000]
const progressValues = [100, 75, 45, 20, 90, 60, 35, 80, 55, 10]
const owners = ["Alex Kim", "Sam Chen", "Riley Park", "Jordan Lee", "Casey Morgan"]
const phases: Project["phase"][] = ["Planning", "Development", "Testing", "Shipped"]
const departments: Project["department"][] = [
  "Engineering", "Product", "Design", "Infrastructure", "Data",
]

const projects: Project[] = Array.from({ length: 50 }, (_, i) => ({
  id: \`PRJ-\${String(i + 1).padStart(3, "0")}\`,
  name: names[i % names.length],
  description: descriptions[i % descriptions.length],
  members: memberSets[i % memberSets.length],
  status: statuses[i % statuses.length],
  priority: priorities[i % priorities.length],
  category: categories[i % categories.length],
  due: dues[i % dues.length],
  budget: budgets[i % budgets.length],
  progress: progressValues[i % progressValues.length],
  owner: owners[i % owners.length],
  phase: phases[i % phases.length],
  department: departments[i % departments.length],
}))

const statusVariant: Record<
  Project["status"],
  "default" | "secondary" | "destructive" | "outline"
> = {
  "on-track": "default",
  "at-risk": "secondary",
  blocked: "destructive",
  completed: "outline",
}

const priorityVariant: Record<
  Project["priority"],
  "destructive" | "secondary" | "outline"
> = {
  high: "destructive",
  medium: "secondary",
  low: "outline",
}

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Project
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.getValue("name")}</div>
        <div className="text-xs text-muted-foreground">{row.original.description}</div>
      </div>
    ),
  },
  {
    id: "members",
    header: "Team",
    cell: ({ row }) => {
      const members = row.original.members
      const shown = members.slice(0, 2)
      const overflow = members.length - 2
      return (
        <AvatarGroup>
          {shown.map((m) => (
            <Avatar key={m.initials} size="sm">
              <AvatarFallback>{m.initials}</AvatarFallback>
            </Avatar>
          ))}
          {overflow > 0 && <AvatarGroupCount>+{overflow}</AvatarGroupCount>}
        </AvatarGroup>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Project["status"]
      return (
        <Badge variant={statusVariant[status]} className="capitalize">
          {status.replace("-", " ")}
        </Badge>
      )
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as Project["priority"]
      return (
        <Badge variant={priorityVariant[priority]} className="capitalize">
          {priority}
        </Badge>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("due")}</span>
    ),
  },
  {
    accessorKey: "budget",
    header: () => <div className="text-right">Budget</div>,
    cell: ({ row }) => {
      const budget = row.getValue("budget") as number
      return (
        <div className="text-right font-medium">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(budget)}
        </div>
      )
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number
      return (
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: \`\${progress}%\` }}
            />
          </div>
          <span className="w-8 text-xs text-muted-foreground">{progress}%</span>
        </div>
      )
    },
  },
  {
    accessorKey: "owner",
    header: "Owner",
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("owner")}</span>
    ),
  },
  {
    accessorKey: "phase",
    header: "Phase",
    cell: ({ row }) => (
      <Badge variant="outline" className="capitalize">
        {row.getValue("phase")}
      </Badge>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("department")}</span>
    ),
  },
]

export function DataTableRichCellsDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 10 } },
    state: { sorting, columnVisibility, globalFilter },
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-semibold">Active Projects</p>
          <p className="text-sm text-muted-foreground">
            Manage and track all projects across teams.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search projects..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-52"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} result(s).
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}`

export {
  DataTableDemo,
  DataTableGlobalFilterDemo,
  DataTableRichCellsDemo,
  dataTableCode,
  dataTableGlobalFilterCode,
  dataTableRichCellsCode,
}
