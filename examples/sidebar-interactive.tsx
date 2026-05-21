"use client"

import * as React from "react"
import { MoreHorizontalIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// ─── Overview demo ───────────────────────────────────────────────────────────

const navPages = ["Dashboard", "Projects", "Team", "Reports"]

const navContent: Record<string, string> = {
  Dashboard: "Overview of your activity and key metrics.",
  Projects: "Active projects and their current status.",
  Team: "Members, roles, and permissions.",
  Reports: "Analytics and exportable summaries.",
}

function SidebarBasicDemo() {
  const [active, setActive] = React.useState("Dashboard")

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="min-h-0 h-full">
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 font-semibold text-sm">
            Acme Corp
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navPages.map((page) => (
                    <SidebarMenuItem key={page}>
                      <SidebarMenuButton
                        isActive={page === active}
                        onClick={() => setActive(page)}
                      >
                        {page}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="px-4 py-3 text-xs text-muted-foreground">
            v2.4.0
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b px-4 py-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            {navContent[active]}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

// ─── Inbox with badges demo ───────────────────────────────────────────────────

const folders = [
  { label: "Inbox", count: 12, desc: "12 unread messages." },
  { label: "Sent", count: 0, desc: "Messages you have sent." },
  { label: "Drafts", count: 3, desc: "3 unsaved drafts." },
  { label: "Spam", count: 5, desc: "5 messages marked as spam." },
  { label: "Trash", count: 0, desc: "Deleted messages." },
]

function SidebarBadgesDemo() {
  const [active, setActive] = React.useState("Inbox")
  const activeFolder = folders.find((f) => f.label === active)

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="min-h-0 h-full">
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 font-semibold text-sm">
            Mail
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Folders</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {folders.map((folder) => (
                    <SidebarMenuItem key={folder.label}>
                      <SidebarMenuButton
                        isActive={folder.label === active}
                        onClick={() => setActive(folder.label)}
                      >
                        {folder.label}
                      </SidebarMenuButton>
                      {folder.count > 0 && (
                        <SidebarMenuBadge>{folder.count}</SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b px-4 py-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            {activeFolder?.desc}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

// ─── File list with context actions demo ─────────────────────────────────────

const files = [
  { name: "README.md", desc: "Project overview and setup instructions." },
  { name: "package.json", desc: "Dependencies and build scripts." },
  { name: "tsconfig.json", desc: "TypeScript compiler options." },
  { name: "next.config.ts", desc: "Next.js build and runtime settings." },
]

function SidebarActionsDemo() {
  const [active, setActive] = React.useState("README.md")
  const activeFile = files.find((f) => f.name === active)

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="min-h-0 h-full">
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 font-semibold text-sm">
            Explorer
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Files</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {files.map((file) => (
                    <SidebarMenuItem key={file.name}>
                      <SidebarMenuButton
                        isActive={file.name === active}
                        onClick={() => setActive(file.name)}
                      >
                        {file.name}
                      </SidebarMenuButton>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction showOnHover aria-label="File actions">
                            <MoreHorizontalIcon />
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start">
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b px-4 py-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            {activeFile?.desc}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

// ─── Nested navigation demo ───────────────────────────────────────────────────

const sections = [
  {
    label: "Getting Started",
    pages: [
      { name: "Introduction", desc: "An overview of the design system." },
      { name: "Installation", desc: "How to install and configure the package." },
      { name: "Quick Start", desc: "Build your first component in minutes." },
    ],
  },
  {
    label: "Components",
    pages: [
      { name: "Button", desc: "Triggers an action or event." },
      { name: "Input", desc: "Accepts text input from the user." },
      { name: "Select", desc: "Selects a value from a list of options." },
    ],
  },
]

function SidebarNestedDemo() {
  const [active, setActive] = React.useState("Introduction")
  const activePage = sections.flatMap((s) => s.pages).find((p) => p.name === active)

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="min-h-0 h-full">
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 font-semibold text-sm">
            Docs
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sections.map((section) => (
                    <SidebarMenuItem key={section.label}>
                      <SidebarMenuButton>{section.label}</SidebarMenuButton>
                      <SidebarMenuSub>
                        {section.pages.map((page) => (
                          <SidebarMenuSubItem key={page.name}>
                            <SidebarMenuSubButton
                              isActive={page.name === active}
                              onClick={() => setActive(page.name)}
                            >
                              {page.name}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b px-4 py-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            {activePage?.desc}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

// ─── Footer action demo ───────────────────────────────────────────────────────

const workspaces = ["Marketing", "Engineering", "Design", "Sales"]

const workspaceContent: Record<string, string> = {
  Marketing: "Campaigns, assets, and brand guidelines.",
  Engineering: "Repos, issues, and deployment pipelines.",
  Design: "Figma files, components, and style tokens.",
  Sales: "Deals, contacts, and revenue forecasts.",
}

function SidebarFooterDemo() {
  const [active, setActive] = React.useState("Marketing")

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-xl border bg-background">
      <SidebarProvider className="min-h-0 h-full">
        <Sidebar collapsible="none">
          <SidebarHeader className="px-4 py-3 font-semibold text-sm">
            Workspaces
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {workspaces.map((ws) => (
                    <SidebarMenuItem key={ws}>
                      <SidebarMenuButton
                        isActive={ws === active}
                        onClick={() => setActive(ws)}
                      >
                        {ws}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-2">
            <Button className="w-full" variant="outline" size="sm">
              <PlusIcon data-icon="inline-start" />
              New Workspace
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex items-center gap-2 border-b px-4 py-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-muted-foreground">
            {workspaceContent[active]}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

export {
  SidebarBasicDemo,
  SidebarBadgesDemo,
  SidebarActionsDemo,
  SidebarNestedDemo,
  SidebarFooterDemo,
}
