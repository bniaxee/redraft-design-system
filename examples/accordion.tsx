import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionControlledDemo } from "@/components/docs/examples/accordion-controlled-demo"

// Basic single accordion

const accordionBasicCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionBasic() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a design system?</AccordionTrigger>
        <AccordionContent>
          A design system is a collection of reusable components, patterns, and
          guidelines that teams use to build products consistently and efficiently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why use component libraries?</AccordionTrigger>
        <AccordionContent>
          Component libraries reduce duplication, enforce visual consistency, and
          allow teams to ship interfaces faster by sharing tested, accessible
          building blocks.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How does accessibility work here?</AccordionTrigger>
        <AccordionContent>
          The accordion follows the WAI-ARIA Accordion pattern. Each trigger is a
          button with the correct <code>aria-expanded</code> and{" "}
          <code>aria-controls</code> attributes managed automatically by the Radix
          UI primitive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`

function AccordionBasicDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a design system?</AccordionTrigger>
        <AccordionContent>
          A design system is a collection of reusable components, patterns, and
          guidelines that teams use to build products consistently and efficiently.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why use component libraries?</AccordionTrigger>
        <AccordionContent>
          Component libraries reduce duplication, enforce visual consistency, and
          allow teams to ship interfaces faster by sharing tested, accessible
          building blocks.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How does accessibility work here?</AccordionTrigger>
        <AccordionContent>
          The accordion follows the WAI-ARIA Accordion pattern. Each trigger is a
          button with the correct <code>aria-expanded</code> and{" "}
          <code>aria-controls</code> attributes managed automatically by the Radix
          UI primitive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// Multiple expand mode

const accordionMultipleCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" className="w-full max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping policy</AccordionTrigger>
        <AccordionContent>
          Orders ship within 2 business days. Standard delivery takes 5–7 business
          days. Express options are available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Returns and refunds</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of delivery for a full refund.
          Return shipping is free on orders over $50.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Customer support</AccordionTrigger>
        <AccordionContent>
          Our support team is available Monday through Friday, 9am–6pm EST. You
          can reach us via email or live chat.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`

function AccordionMultipleDemo() {
  return (
    <Accordion type="multiple" className="w-full max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping policy</AccordionTrigger>
        <AccordionContent>
          Orders ship within 2 business days. Standard delivery takes 5–7
          business days. Express options are available at checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Returns and refunds</AccordionTrigger>
        <AccordionContent>
          Items can be returned within 30 days of delivery for a full refund.
          Return shipping is free on orders over $50.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Customer support</AccordionTrigger>
        <AccordionContent>
          Our support team is available Monday through Friday, 9am–6pm EST. You
          can reach us via email or live chat.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// Controlled accordion

const accordionControlledCode = `"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionControlled() {
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
}`

// Disabled item

const accordionDisabledCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="available">
        <AccordionTrigger>Available plan</AccordionTrigger>
        <AccordionContent>
          This plan is active and ready to use. You can upgrade or downgrade at
          any time from your billing settings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="locked" disabled>
        <AccordionTrigger>Enterprise plan (contact sales)</AccordionTrigger>
        <AccordionContent>
          This section is not accessible in your current plan.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="another">
        <AccordionTrigger>Free plan</AccordionTrigger>
        <AccordionContent>
          The free plan includes up to 3 projects and 5 collaborators with
          community support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`

function AccordionDisabledDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="available">
        <AccordionTrigger>Available plan</AccordionTrigger>
        <AccordionContent>
          This plan is active and ready to use. You can upgrade or downgrade at
          any time from your billing settings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="locked" disabled>
        <AccordionTrigger>Enterprise plan (contact sales)</AccordionTrigger>
        <AccordionContent>
          This section is not accessible in your current plan.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="another">
        <AccordionTrigger>Free plan</AccordionTrigger>
        <AccordionContent>
          The free plan includes up to 3 projects and 5 collaborators with
          community support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export {
  AccordionBasicDemo,
  AccordionMultipleDemo,
  AccordionControlledDemo,
  AccordionDisabledDemo,
  accordionBasicCode,
  accordionMultipleCode,
  accordionControlledCode,
  accordionDisabledCode,
}
