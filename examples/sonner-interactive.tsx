"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const toastPositions = [
  { label: "Top left", value: "top-left" },
  { label: "Top center", value: "top-center" },
  { label: "Top right", value: "top-right" },
  { label: "Bottom left", value: "bottom-left" },
  { label: "Bottom center", value: "bottom-center" },
  { label: "Bottom right", value: "bottom-right" },
] as const

function SonnerBasicDemo() {
  return (
    <div className="flex justify-center">
      <Toaster id="sonner-basic" position="top-center" />
      <Button
        variant="outline"
        onClick={() =>
          toast("Settings saved", {
            description: "Notification preferences were updated.",
            toasterId: "sonner-basic",
          })
        }
      >
        Show toast
      </Button>
    </div>
  )
}

function SonnerActionDemo() {
  return (
    <div className="flex justify-center">
      <Toaster id="sonner-action" position="top-center" />
      <Button
        variant="outline"
        onClick={() =>
          toast("Export queued", {
            description: "The monthly report will be ready in a few minutes.",
            toasterId: "sonner-action",
            action: {
              label: "Undo",
              onClick: () =>
                toast("Export canceled", {
                  toasterId: "sonner-action",
                }),
            },
          })
        }
      >
        Queue export
      </Button>
    </div>
  )
}

function SonnerPositionDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Toaster id="sonner-position" />
      {toastPositions.map(({ label, value }) => (
        <Button
          key={value}
          variant="outline"
          onClick={() =>
            toast("Toast position changed", {
              description: "Toast shown at " + label.toLowerCase() + ".",
              position: value,
              toasterId: "sonner-position",
            })
          }
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export { SonnerActionDemo, SonnerBasicDemo, SonnerPositionDemo }
