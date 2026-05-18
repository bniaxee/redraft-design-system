import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
} from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const alertBasicCode = `import { InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertBasic() {
  return (
    <Alert className="max-w-xl">
      <InfoIcon />
      <AlertTitle>Project updated</AlertTitle>
      <AlertDescription>
        Your workspace settings were saved and are now active for every member.
      </AlertDescription>
    </Alert>
  )
}`

function AlertBasicDemo() {
  return (
    <Alert className="max-w-xl">
      <InfoIcon />
      <AlertTitle>Project updated</AlertTitle>
      <AlertDescription>
        Your workspace settings were saved and are now active for every member.
      </AlertDescription>
    </Alert>
  )
}

const alertVariantsCode = `import { AlertTriangleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertVariants() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Import complete</AlertTitle>
        <AlertDescription>
          All records were processed successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTriangleIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Update your billing details before the next retry.
        </AlertDescription>
      </Alert>
    </div>
  )
}`

function AlertVariantsDemo() {
  return (
    <div className="grid w-full max-w-xl gap-3">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Import complete</AlertTitle>
        <AlertDescription>
          All records were processed successfully.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTriangleIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          Update your billing details before the next retry.
        </AlertDescription>
      </Alert>
    </div>
  )
}

const alertActionCode = `import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertWithAction() {
  return (
    <Alert className="max-w-xl">
      <AlertCircleIcon />
      <AlertTitle>Usage limit reached</AlertTitle>
      <AlertDescription>
        Archive older projects or upgrade your plan to continue creating new
        workspaces.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View
        </Button>
      </AlertAction>
    </Alert>
  )
}`

function AlertActionDemo() {
  return (
    <Alert className="max-w-xl">
      <AlertCircleIcon />
      <AlertTitle>Usage limit reached</AlertTitle>
      <AlertDescription>
        Archive older projects or upgrade your plan to continue creating new
        workspaces.
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          View
        </Button>
      </AlertAction>
    </Alert>
  )
}

export {
  AlertActionDemo,
  AlertBasicDemo,
  AlertVariantsDemo,
  alertActionCode,
  alertBasicCode,
  alertVariantsCode,
}
