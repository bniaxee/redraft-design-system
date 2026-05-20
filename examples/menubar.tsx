import {
  ArchiveIcon,
  FileTextIcon,
  FolderOpenIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export { MenubarCheckboxDemo, MenubarRadioDemo } from "@/components/docs/examples/menubar-interactive"

const menubarBasicCode = `import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarBasicDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New Document <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Export</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Bold <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Italic <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Strikethrough</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`

function MenubarBasicDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New Document <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Export</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Bold <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Italic <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Strikethrough</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

const menubarCheckboxCode = `"use client"

import * as React from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckboxDemo() {
  const [lineNumbers, setLineNumbers] = React.useState(true)
  const [minimap, setMinimap] = React.useState(false)
  const [wordWrap, setWordWrap] = React.useState(true)
  const [spellCheck, setSpellCheck] = React.useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={lineNumbers}
            onCheckedChange={setLineNumbers}
          >
            Line Numbers
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={minimap}
            onCheckedChange={setMinimap}
          >
            Minimap
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={wordWrap}
            onCheckedChange={setWordWrap}
          >
            Word Wrap
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={spellCheck}
            onCheckedChange={setSpellCheck}
          >
            Spell Check
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`

const menubarRadioCode = `"use client"

import * as React from "react"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRadioDemo() {
  const [quality, setQuality] = React.useState("1080p")
  const [speed, setSpeed] = React.useState("1x")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Quality</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={quality} onValueChange={setQuality}>
            <MenubarRadioItem value="auto">Auto</MenubarRadioItem>
            <MenubarRadioItem value="720p">720p</MenubarRadioItem>
            <MenubarRadioItem value="1080p">1080p</MenubarRadioItem>
            <MenubarRadioItem value="4k">4K</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Speed</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={speed} onValueChange={setSpeed}>
            <MenubarRadioItem value="0.5x">0.5×</MenubarRadioItem>
            <MenubarRadioItem value="1x">1×</MenubarRadioItem>
            <MenubarRadioItem value="1.5x">1.5×</MenubarRadioItem>
            <MenubarRadioItem value="2x">2×</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`

const menubarSubmenuCode = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarSubmenuDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Shape</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Rectangle</MenubarItem>
              <MenubarItem>Circle</MenubarItem>
              <MenubarItem>Line</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Text</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Heading</MenubarItem>
              <MenubarItem>Paragraph</MenubarItem>
              <MenubarItem>Caption</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Select All</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Transform</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Scale</MenubarItem>
              <MenubarItem>Rotate</MenubarItem>
              <MenubarItem>Flip</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`

function MenubarSubmenuDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Shape</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Rectangle</MenubarItem>
              <MenubarItem>Circle</MenubarItem>
              <MenubarItem>Line</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Text</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Heading</MenubarItem>
              <MenubarItem>Paragraph</MenubarItem>
              <MenubarItem>Caption</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Select All</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Transform</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Scale</MenubarItem>
              <MenubarItem>Rotate</MenubarItem>
              <MenubarItem>Flip</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

const menubarIconsCode = `import {
  ArchiveIcon,
  FileTextIcon,
  FolderOpenIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarIconsDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileTextIcon />
            New Note
          </MenubarItem>
          <MenubarItem>
            <FolderOpenIcon />
            Open Folder
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon />
            Save
          </MenubarItem>
          <MenubarItem>
            <ArchiveIcon />
            Archive
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SettingsIcon />
            Settings
          </MenubarItem>
          <MenubarItem>
            <HelpCircleIcon />
            Help
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2Icon />
            Delete Account
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`

function MenubarIconsDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileTextIcon />
            New Note
          </MenubarItem>
          <MenubarItem>
            <FolderOpenIcon />
            Open Folder
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon />
            Save
          </MenubarItem>
          <MenubarItem>
            <ArchiveIcon />
            Archive
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <SettingsIcon />
            Settings
          </MenubarItem>
          <MenubarItem>
            <HelpCircleIcon />
            Help
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2Icon />
            Delete Account
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export {
  MenubarBasicDemo,
  menubarBasicCode,
  menubarCheckboxCode,
  menubarRadioCode,
  MenubarSubmenuDemo,
  menubarSubmenuCode,
  MenubarIconsDemo,
  menubarIconsCode,
}
