"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionControlledDemo() {
  const [value, setValue] = React.useState<string>("step-1")

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
      className="w-full max-w-lg"
    >
      <AccordionItem value="step-1">
        <AccordionTrigger>Step 1 - Create an account</AccordionTrigger>
        <AccordionContent>
          Register with your email address. You will receive a verification link
          within a few minutes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="step-2">
        <AccordionTrigger>Step 2 - Set up your workspace</AccordionTrigger>
        <AccordionContent>
          Choose a workspace name and invite your teammates. You can always
          change these settings later.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="step-3">
        <AccordionTrigger>Step 3 - Start building</AccordionTrigger>
        <AccordionContent>
          Your workspace is ready. Head to the dashboard to create your first
          project.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { AccordionControlledDemo }
