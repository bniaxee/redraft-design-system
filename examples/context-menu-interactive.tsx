"use client"

import * as React from "react"
import {
  ClipboardPasteIcon,
  CopyIcon,
  FolderIcon,
  ImageIcon,
  ScissorsIcon,
  ShareIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function ContextMenuBasicInteractive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-56 items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground select-none">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ScissorsIcon />
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <ShareIcon />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>
                  <FolderIcon />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <ImageIcon />
                  Export as image
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <StarIcon />
            Add to favorites
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <Trash2Icon />
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function ContextMenuCheckboxInteractive() {
  const [showGrid, setShowGrid] = React.useState(true)
  const [showRulers, setShowRulers] = React.useState(false)
  const [snapToObjects, setSnapToObjects] = React.useState(true)
  const [showComments, setShowComments] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-56 items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground select-none">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showGrid}
            onCheckedChange={setShowGrid}
          >
            Show Grid
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showRulers}
            onCheckedChange={setShowRulers}
          >
            Show Rulers
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={snapToObjects}
            onCheckedChange={setSnapToObjects}
          >
            Snap to Objects
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showComments}
            onCheckedChange={setShowComments}
          >
            Show Comments
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

function ContextMenuRadioInteractive() {
  const [layout, setLayout] = React.useState("comfortable")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-56 items-center justify-center rounded-2xl border border-dashed text-sm text-muted-foreground select-none">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuRadioGroup value={layout} onValueChange={setLayout}>
            <ContextMenuLabel>Row density</ContextMenuLabel>
            <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
            <ContextMenuRadioItem value="comfortable">
              Comfortable
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="spacious">Spacious</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export {
  ContextMenuBasicInteractive,
  ContextMenuCheckboxInteractive,
  ContextMenuRadioInteractive,
}
