import { BarChart2Icon, DownloadIcon, TableIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabsDefaultCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDefault() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="rounded-2xl border p-4 text-sm text-muted-foreground">
        The live component renders here.
      </TabsContent>
      <TabsContent value="code" className="rounded-2xl border p-4 text-sm font-mono text-muted-foreground">
        Source code renders here.
      </TabsContent>
      <TabsContent value="docs" className="rounded-2xl border p-4 text-sm text-muted-foreground">
        Component documentation renders here.
      </TabsContent>
    </Tabs>
  )
}`

function TabsDefaultDemo() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="rounded-2xl border p-4 text-sm text-muted-foreground"
      >
        The live component renders here.
      </TabsContent>
      <TabsContent
        value="code"
        className="rounded-2xl border p-4 text-sm font-mono text-muted-foreground"
      >
        Source code renders here.
      </TabsContent>
      <TabsContent
        value="docs"
        className="rounded-2xl border p-4 text-sm text-muted-foreground"
      >
        Component documentation renders here.
      </TabsContent>
    </Tabs>
  )
}

const tabsVariantsCode = `import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsVariants() {
  return (
    <div className="flex flex-col items-start gap-6">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}`

function TabsVariantsDemo() {
  return (
    <div className="flex flex-col items-start gap-6">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

const tabsPanelsCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsPanels() {
  return (
    <Tabs defaultValue="description" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <Card>
          <CardHeader>
            <CardTitle>Ticket #4821</CardTitle>
            <CardDescription>Login button unresponsive on mobile Safari</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Reported on iOS 17.4. The sign-in button does not respond to tap
            events in Safari. Reproducible on iPhone 14 and 15 with the latest
            app version.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="comments">
        <Card>
          <CardHeader>
            <CardTitle>2 comments</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Confirmed on iPhone 12 as well. Likely related to the touch event
            refactor merged last Thursday.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="activity">
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Assigned to Maya. Priority set to high. Tagged as mobile.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`

function TabsPanelsDemo() {
  return (
    <Tabs defaultValue="description" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <Card>
          <CardHeader>
            <CardTitle>Ticket #4821</CardTitle>
            <CardDescription>
              Login button unresponsive on mobile Safari
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Reported on iOS 17.4. The sign-in button does not respond to tap
            events in Safari. Reproducible on iPhone 14 and 15 with the latest
            app version.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="comments">
        <Card>
          <CardHeader>
            <CardTitle>2 comments</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Confirmed on iPhone 12 as well. Likely related to the touch event
            refactor merged last Thursday.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="activity">
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Assigned to Maya. Priority set to high. Tagged as mobile.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

const tabsVerticalCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs defaultValue="appearance" orientation="vertical" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="language">Language</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent value="appearance" className="px-2 text-sm text-muted-foreground">
        Customize your theme, font size, and display density.
      </TabsContent>
      <TabsContent value="language" className="px-2 text-sm text-muted-foreground">
        Choose your preferred language and date format.
      </TabsContent>
      <TabsContent value="privacy" className="px-2 text-sm text-muted-foreground">
        Control who can see your activity and profile.
      </TabsContent>
      <TabsContent value="integrations" className="px-2 text-sm text-muted-foreground">
        Connect third-party services and manage API keys.
      </TabsContent>
    </Tabs>
  )
}`

function TabsVerticalDemo() {
  return (
    <Tabs
      defaultValue="appearance"
      orientation="vertical"
      className="w-full max-w-sm"
    >
      <TabsList>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="language">Language</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent
        value="appearance"
        className="px-2 text-sm text-muted-foreground"
      >
        Customize your theme, font size, and display density.
      </TabsContent>
      <TabsContent
        value="language"
        className="px-2 text-sm text-muted-foreground"
      >
        Choose your preferred language and date format.
      </TabsContent>
      <TabsContent
        value="privacy"
        className="px-2 text-sm text-muted-foreground"
      >
        Control who can see your activity and profile.
      </TabsContent>
      <TabsContent
        value="integrations"
        className="px-2 text-sm text-muted-foreground"
      >
        Connect third-party services and manage API keys.
      </TabsContent>
    </Tabs>
  )
}

const tabsIconsCode = `import { BarChart2Icon, DownloadIcon, TableIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsIcons() {
  return (
    <Tabs defaultValue="chart">
      <TabsList>
        <TabsTrigger value="chart">
          <BarChart2Icon />
          Chart
        </TabsTrigger>
        <TabsTrigger value="table">
          <TableIcon />
          Table
        </TabsTrigger>
        <TabsTrigger value="export">
          <DownloadIcon />
          Export
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`

function TabsIconsDemo() {
  return (
    <Tabs defaultValue="chart">
      <TabsList>
        <TabsTrigger value="chart">
          <BarChart2Icon />
          Chart
        </TabsTrigger>
        <TabsTrigger value="table">
          <TableIcon />
          Table
        </TabsTrigger>
        <TabsTrigger value="export">
          <DownloadIcon />
          Export
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

const tabsDisabledCode = `import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="analytics" disabled>Analytics</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}`

function TabsDisabledDemo() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="analytics" disabled>
          Analytics
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export {
  TabsDefaultDemo,
  tabsDefaultCode,
  TabsVariantsDemo,
  tabsVariantsCode,
  TabsPanelsDemo,
  tabsPanelsCode,
  TabsVerticalDemo,
  tabsVerticalCode,
  TabsIconsDemo,
  tabsIconsCode,
  TabsDisabledDemo,
  tabsDisabledCode,
}
