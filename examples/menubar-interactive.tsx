"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
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
}

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
}
