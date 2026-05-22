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
  DataTableComplexFiltersDemo,
  DataTableRichDataDemo,
  DataTableScrollDemo,
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

const dataTableComplexFiltersCode = `"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ChevronDown, ListFilter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Transaction = {
  id: string
  date: string
  description: string
  category: string
  status: "completed" | "pending" | "failed" | "refunded"
  account: string
}

const transactions: Transaction[] = [
  { id: "TXN-0001", date: "Jan 3, 2025", description: "Netflix Subscription", category: "Subscriptions", status: "completed", account: "Main Checking" },
  { id: "TXN-0002", date: "Jan 7, 2025", description: "AWS Services", category: "Infrastructure", status: "pending", account: "Business Savings" },
  { id: "TXN-0003", date: "Jan 12, 2025", description: "Stripe Payment", category: "Payments", status: "failed", account: "Main Checking" },
  { id: "TXN-0004", date: "Jan 15, 2025", description: "Google Ads", category: "Marketing", status: "completed", account: "Payroll Account" },
  { id: "TXN-0005", date: "Feb 1, 2025", description: "Figma Pro", category: "Design", status: "refunded", account: "Reserve Fund" },
  { id: "TXN-0006", date: "Feb 5, 2025", description: "Vercel Pro", category: "Hosting", status: "completed", account: "Main Checking" },
  { id: "TXN-0007", date: "Feb 11, 2025", description: "GitHub Teams", category: "Development", status: "pending", account: "Business Savings" },
  { id: "TXN-0008", date: "Feb 18, 2025", description: "Datadog", category: "Infrastructure", status: "completed", account: "Main Checking" },
]

const txStatusVariant: Record<
  Transaction["status"],
  "default" | "secondary" | "destructive" | "outline"
> = {
  completed: "default",
  pending: "secondary",
  failed: "destructive",
  refunded: "outline",
}

const multiValueFilter: FilterFn<any> = (row, columnId, filterValues: string[]) =>
  filterValues.includes(row.getValue(columnId) as string)
multiValueFilter.autoRemove = (val: string[]) => !val?.length

const dateRangeFilter: FilterFn<any> = (row, columnId, filterValue: [string, string]) => {
  const [from, to] = filterValue ?? ["", ""]
  const cellDate = new Date(row.getValue(columnId) as string)
  if (from && to) return cellDate >= new Date(from) && cellDate <= new Date(to)
  if (from) return cellDate >= new Date(from)
  if (to) return cellDate <= new Date(to)
  return true
}
dateRangeFilter.autoRemove = (val: [string, string]) => !val?.[0] && !val?.[1]

function SearchableFilterHeader({
  column,
  title,
}: {
  column: Column<any, unknown>
  title: string
}) {
  const [search, setSearch] = React.useState("")
  const selected = (column.getFilterValue() as string[]) ?? []
  const allOptions = Array.from(column.getFacetedUniqueValues().keys()).sort() as string[]
  const options = search
    ? allOptions.filter((o) => o.toLowerCase().includes(search.toLowerCase()))
    : allOptions

  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={selected.length > 0 ? "secondary" : "ghost"}
            size="icon-xs"
          >
            <ListFilter className="h-3.5 w-3.5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-2" align="start">
          <Input
            placeholder={\`Search \${title.toLowerCase()}...\`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-2 h-7 text-xs"
          />
          <ScrollArea className="h-40">
            <div className="space-y-0.5">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted"
                >
                  <Checkbox
                    checked={selected.includes(option)}
                    onCheckedChange={(checked) => {
                      const next = checked
                        ? [...selected, option]
                        : selected.filter((s) => s !== option)
                      column.setFilterValue(next.length ? next : undefined)
                    }}
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "description",
    filterFn: "includesString",
    header: ({ column }) => {
      const value = (column.getFilterValue() as string) ?? ""
      return (
        <div className="flex items-center gap-1">
          <span>Description</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={value ? "secondary" : "ghost"}
                size="icon-xs"
              >
                <ListFilter className="h-3.5 w-3.5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-2" align="start">
              <Input
                placeholder="Search description..."
                value={value}
                onChange={(e) => column.setFilterValue(e.target.value || undefined)}
                className="h-7 text-xs"
              />
            </PopoverContent>
          </Popover>
        </div>
      )
    },
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("description")}</span>
    ),
  },
  {
    accessorKey: "status",
    filterFn: multiValueFilter,
    header: ({ column }) => {
      const selected = (column.getFilterValue() as string[]) ?? []
      const options = Array.from(column.getFacetedUniqueValues().keys()).sort() as string[]
      return (
        <div className="flex items-center gap-1">
          <span>Status</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={selected.length > 0 ? "secondary" : "ghost"}
                size="icon-xs"
              >
                <ListFilter className="h-3.5 w-3.5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-2" align="start">
              <div className="space-y-0.5">
                {options.map((status) => (
                  <label
                    key={status}
                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-muted"
                  >
                    <Checkbox
                      checked={selected.includes(status)}
                      onCheckedChange={(checked) => {
                        const next = checked
                          ? [...selected, status]
                          : selected.filter((s) => s !== status)
                        column.setFilterValue(next.length ? next : undefined)
                      }}
                    />
                    <span className="capitalize text-sm">{status}</span>
                  </label>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as Transaction["status"]
      return (
        <Badge variant={txStatusVariant[status]} className="capitalize">
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "category",
    filterFn: multiValueFilter,
    header: ({ column }) => <SearchableFilterHeader column={column} title="Category" />,
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "date",
    filterFn: dateRangeFilter,
    header: ({ column }) => {
      const [from, to] = (column.getFilterValue() as [string, string]) ?? ["", ""]
      const isActive = !!(from || to)
      return (
        <div className="flex items-center gap-1">
          <span>Date</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                size="icon-xs"
              >
                <ListFilter className="h-3.5 w-3.5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-3" align="start">
              <div className="space-y-2">
                <div>
                  <p className="mb-1 text-xs text-muted-foreground">From</p>
                  <Input
                    type="date"
                    value={from ?? ""}
                    onChange={(e) =>
                      column.setFilterValue(
                        e.target.value || to
                          ? [e.target.value, to ?? ""]
                          : undefined
                      )
                    }
                    className="h-8 text-xs"
                  />
                </div>
                <div>
                  <p className="mb-1 text-xs text-muted-foreground">To</p>
                  <Input
                    type="date"
                    value={to ?? ""}
                    onChange={(e) =>
                      column.setFilterValue(
                        from || e.target.value
                          ? [from ?? "", e.target.value]
                          : undefined
                      )
                    }
                    className="h-8 text-xs"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )
    },
    cell: ({ row }) => <span>{row.getValue("date")}</span>,
  },
  {
    accessorKey: "account",
    filterFn: multiValueFilter,
    header: ({ column }) => <SearchableFilterHeader column={column} title="Account" />,
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("account")}</span>
    ),
  },
]

export function DataTableComplexFiltersDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: "includesString",
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 10 } },
    state: { sorting, columnFilters, columnVisibility, globalFilter },
  })

  const hasFilters = columnFilters.length > 0 || !!globalFilter

  function resetFilters() {
    setColumnFilters([])
    setGlobalFilter("")
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-semibold">Transactions</p>
          <p className="text-sm text-muted-foreground">
            Filter by column using the filter icon in each header.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {hasFilters && (
            <Button variant="destructive" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          )}
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-48"
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
            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}`

const dataTableRichDataCode = `"use client"

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
import { ArrowUpDown, ChevronDown, Eye, Pencil, Trash2 } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
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

type Member = {
  name: string
  src: string
  fallback: string
}

type Project = {
  id: string
  name: string
  description: string
  members: Member[]
  status: "on-track" | "at-risk" | "blocked" | "completed"
  progress: number
  due: string
}

const projectMembers: Member[] = [
  { name: "Alex Kim", src: "https://api.dicebear.com/9.x/avataaars/svg?seed=alex", fallback: "AK" },
  { name: "Sam Chen", src: "https://api.dicebear.com/9.x/avataaars/svg?seed=sam", fallback: "SC" },
  { name: "Riley Park", src: "https://api.dicebear.com/9.x/avataaars/svg?seed=riley", fallback: "RP" },
  { name: "Jordan Lee", src: "https://api.dicebear.com/9.x/avataaars/svg?seed=jordan", fallback: "JL" },
  { name: "Casey Morgan", src: "https://api.dicebear.com/9.x/avataaars/svg?seed=casey", fallback: "CM" },
]

const projects: Project[] = [
  { id: "PRJ-001", name: "API Redesign", description: "RESTful endpoints migration", members: [projectMembers[0], projectMembers[1]], status: "on-track", progress: 75, due: "Mar 3, 2025" },
  { id: "PRJ-002", name: "Mobile App v2", description: "iOS and Android refresh", members: [projectMembers[2], projectMembers[3]], status: "at-risk", progress: 45, due: "Apr 20, 2025" },
  { id: "PRJ-003", name: "Design System", description: "Component library update", members: [projectMembers[4], projectMembers[0]], status: "on-track", progress: 90, due: "May 1, 2025" },
  { id: "PRJ-004", name: "Analytics Dashboard", description: "Usage metrics and reporting", members: [projectMembers[1], projectMembers[2], projectMembers[3]], status: "blocked", progress: 20, due: "Jun 15, 2025" },
  { id: "PRJ-005", name: "Onboarding Flow", description: "New user experience", members: [projectMembers[0], projectMembers[4]], status: "completed", progress: 100, due: "Jan 8, 2025" },
  { id: "PRJ-006", name: "Auth Service", description: "OAuth and SSO support", members: [projectMembers[3]], status: "on-track", progress: 60, due: "Jul 4, 2025" },
  { id: "PRJ-007", name: "Search Infrastructure", description: "Full-text indexing", members: [projectMembers[0], projectMembers[2], projectMembers[1], projectMembers[3]], status: "at-risk", progress: 35, due: "Aug 22, 2025" },
  { id: "PRJ-008", name: "Billing Portal", description: "Subscription management", members: [projectMembers[1], projectMembers[4]], status: "on-track", progress: 80, due: "Sep 9, 2025" },
]

const statusVariant: Record<
  Project["status"],
  "default" | "secondary" | "destructive" | "outline"
> = {
  "on-track": "default",
  "at-risk": "secondary",
  blocked: "destructive",
  completed: "outline",
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
      const shown = members.slice(0, 3)
      const overflow = members.length - 3
      return (
        <AvatarGroup>
          {shown.map((m) => (
            <Avatar key={m.name} size="sm">
              <AvatarImage src={m.src} alt={m.name} />
              <AvatarFallback>{m.fallback}</AvatarFallback>
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
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number
      return (
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
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
    accessorKey: "due",
    header: "Due",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("due")}</span>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => (
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon-xs">
          <Eye className="h-3.5 w-3.5" />
        </Button>
        <Button variant="ghost" size="icon-xs">
          <Pencil className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    ),
  },
]

export function DataTableRichDataDemo() {
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

const dataTableScrollCode = `"use client"

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
import { ChevronDown } from "lucide-react"

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

type Transaction = {
  id: string
  date: string
  description: string
  category: string
  amount: number
  fee: number
  currency: string
  status: "completed" | "pending" | "failed" | "refunded"
  account: string
  method: "Card" | "Bank Transfer" | "Wallet"
  reference: string
  country: string
}

const txDescriptions = [
  "Netflix Subscription", "AWS Services", "Stripe Payment", "Shopify Revenue",
  "Google Ads", "Figma Pro", "Vercel Pro", "GitHub Teams",
  "Zoom License", "Slack Business", "Notion Team", "Linear",
  "Twilio API", "SendGrid", "Cloudflare", "Datadog",
  "Adobe Creative", "Dropbox Business", "Asana", "HubSpot",
]
const txCategories = [
  "Subscriptions", "Infrastructure", "Payments", "Revenue",
  "Marketing", "Design", "Hosting", "Development",
  "Communication", "Productivity",
]
const txDates = [
  "Jan 3, 2025", "Jan 7, 2025", "Jan 12, 2025", "Jan 15, 2025", "Jan 19, 2025",
  "Jan 22, 2025", "Feb 1, 2025", "Feb 5, 2025", "Feb 11, 2025", "Feb 18, 2025",
]
const txStatuses: Transaction["status"][] = ["completed", "pending", "failed", "refunded"]
const txAccounts = ["Main Checking", "Business Savings", "Payroll Account", "Reserve Fund"]
const txMethods: Transaction["method"][] = ["Card", "Bank Transfer", "Wallet"]
const txCurrencies = ["USD", "EUR", "GBP", "CAD", "AUD"]
const txCountries = [
  "United States", "Germany", "United Kingdom", "Canada",
  "Australia", "France", "Netherlands",
]
const txAmounts = [29.99, 142.50, 899.00, 2450.00, 75.00, 349.00, 20.00, 1200.00, 500.00, 15.00]
const txFees = [0, 1.50, 2.99, 5.00, 0.99, 3.50, 0, 12.00, 0, 0.50]
const txRefs = [
  "REF-A7K29X", "REF-B3M81P", "REF-C5N44Q", "REF-D9P07R", "REF-E2Q63S",
  "REF-F8R20T", "REF-G1S95U", "REF-H4T72V", "REF-I6U58W", "REF-J0V41X",
]

const transactions: Transaction[] = Array.from({ length: 50 }, (_, i) => ({
  id: \`TXN-\${String(i + 1).padStart(4, "0")}\`,
  date: txDates[i % txDates.length],
  description: txDescriptions[i % txDescriptions.length],
  category: txCategories[i % txCategories.length],
  amount: txAmounts[i % txAmounts.length],
  fee: txFees[i % txFees.length],
  currency: txCurrencies[i % txCurrencies.length],
  status: txStatuses[i % txStatuses.length],
  account: txAccounts[i % txAccounts.length],
  method: txMethods[i % txMethods.length],
  reference: txRefs[i % txRefs.length],
  country: txCountries[i % txCountries.length],
}))

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.getValue("id")}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <span>{row.getValue("date")}</span>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <span className="whitespace-nowrap font-medium">
        {row.getValue("description")}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("category")}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number
      return (
        <div className="text-right font-medium">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(amount)}
        </div>
      )
    },
  },
  {
    accessorKey: "fee",
    header: () => <div className="text-right">Fee</div>,
    cell: ({ row }) => {
      const fee = row.getValue("fee") as number
      return (
        <div className="text-right text-muted-foreground">
          {fee === 0
            ? "—"
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              }).format(fee)}
        </div>
      )
    },
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: ({ row }) => <span>{row.getValue("currency")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="capitalize">{row.getValue("status")}</span>
    ),
  },
  {
    accessorKey: "account",
    header: "Account",
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("account")}</span>
    ),
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ row }) => <span>{row.getValue("method")}</span>,
  },
  {
    accessorKey: "reference",
    header: "Reference",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.getValue("reference")}
      </span>
    ),
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-muted-foreground">
        {row.getValue("country")}
      </span>
    ),
  },
]

export function DataTableScrollDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 15 } },
    state: { sorting, columnVisibility, globalFilter },
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="font-semibold">Transactions</p>
          <p className="text-sm text-muted-foreground">
            All account transactions for the current period.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search transactions..."
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
      </div>
      <div className="overflow-x-auto rounded-md border">
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
                <TableRow key={row.id}>
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
      <div className="flex items-center justify-between py-4">
        <p className="text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} result(s).
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
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
  DataTableComplexFiltersDemo,
  DataTableRichDataDemo,
  DataTableScrollDemo,
  dataTableCode,
  dataTableGlobalFilterCode,
  dataTableComplexFiltersCode,
  dataTableRichDataCode,
  dataTableScrollCode,
}
