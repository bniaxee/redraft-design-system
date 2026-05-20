import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

const spinnerDefaultCode = `import { Spinner } from "@/components/ui/spinner"

export function SpinnerDefault() {
  return <Spinner />
}`

function SpinnerDefaultDemo() {
  return <Spinner />
}

const spinnerSizesCode = `import { Spinner } from "@/components/ui/spinner"

export function SpinnerSizes() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}`

function SpinnerSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}

const spinnerButtonCode = `import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Publishing
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Saving draft
      </Button>
    </div>
  )
}`

function SpinnerButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Publishing
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Saving draft
      </Button>
    </div>
  )
}

const spinnerBadgeCode = `import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-3">
      <Badge>
        <Spinner data-icon="inline-start" />
        Deploying
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Building
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Indexing
      </Badge>
    </div>
  )
}`

function SpinnerBadgeDemo() {
  return (
    <div className="flex items-center gap-3">
      <Badge>
        <Spinner data-icon="inline-start" />
        Deploying
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Building
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Indexing
      </Badge>
    </div>
  )
}

const spinnerInputCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerInput() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <InputGroup>
        <InputGroupInput placeholder="Search members..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter coupon code" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Validating...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`

function SpinnerInputDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <InputGroup>
        <InputGroupInput placeholder="Search members..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter coupon code" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Validating...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export {
  SpinnerDefaultDemo,
  SpinnerSizesDemo,
  SpinnerButtonDemo,
  SpinnerBadgeDemo,
  SpinnerInputDemo,
  spinnerDefaultCode,
  spinnerSizesCode,
  spinnerButtonCode,
  spinnerBadgeCode,
  spinnerInputCode,
}
