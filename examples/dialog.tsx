import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const dialogBasicCode = `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create project</DialogTitle>
          <DialogDescription>
            Add a new project to your workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="project-name" className="text-sm font-medium">
              Name
            </label>
            <Input id="project-name" placeholder="My project" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="project-slug" className="text-sm font-medium">
              Slug
            </label>
            <Input id="project-slug" placeholder="my-project" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

function DialogBasicDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create project</DialogTitle>
          <DialogDescription>
            Add a new project to your workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="project-name" className="text-sm font-medium">
              Name
            </label>
            <Input id="project-name" placeholder="My project" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="project-slug" className="text-sm font-medium">
              Slug
            </label>
            <Input id="project-slug" placeholder="my-project" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const dialogNoCloseCode = `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogNoClose() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">What's new</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>New: Dark mode support</DialogTitle>
          <DialogDescription>
            Your workspace now supports a dark theme. Switch it on from
            Settings → Appearance at any time.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

function DialogNoCloseDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">What&apos;s new</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>New: Dark mode support</DialogTitle>
          <DialogDescription>
            Your workspace now supports a dark theme. Switch it on from
            Settings → Appearance at any time.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full">Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const dialogScrollCode = `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogScroll() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View terms</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Read through the terms before accepting.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[40vh] overflow-y-auto px-4">
          <p className="mb-4 leading-normal text-muted-foreground">
            By using this service you agree to be bound by these Terms of
            Service, our Privacy Policy, and any additional guidelines posted
            on the platform. If you do not agree, you may not access or use
            the service.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            You are responsible for all activity that occurs under your
            account. Keep your credentials secure and notify us immediately of
            any unauthorized access or suspected breach.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            We may modify these terms at any time. Continued use of the
            service after changes are posted constitutes acceptance of the
            revised terms. Material changes will be communicated via email or
            an in-app notice.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            We reserve the right to suspend or terminate accounts that violate
            these terms, our policies, or applicable law, with or without
            advance notice.
          </p>
          <p className="leading-normal text-muted-foreground">
            This agreement is governed by the laws of the jurisdiction in
            which we operate, without regard to conflict-of-law provisions.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

function DialogScrollDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View terms</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Read through the terms before accepting.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[40vh] overflow-y-auto px-4">
          <p className="mb-4 leading-normal text-muted-foreground">
            By using this service you agree to be bound by these Terms of
            Service, our Privacy Policy, and any additional guidelines posted
            on the platform. If you do not agree, you may not access or use
            the service.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            You are responsible for all activity that occurs under your
            account. Keep your credentials secure and notify us immediately of
            any unauthorized access or suspected breach.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            We may modify these terms at any time. Continued use of the
            service after changes are posted constitutes acceptance of the
            revised terms. Material changes will be communicated via email or
            an in-app notice.
          </p>
          <p className="mb-4 leading-normal text-muted-foreground">
            We reserve the right to suspend or terminate accounts that violate
            these terms, our policies, or applicable law, with or without
            advance notice.
          </p>
          <p className="leading-normal text-muted-foreground">
            This agreement is governed by the laws of the jurisdiction in
            which we operate, without regard to conflict-of-law provisions.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export {
  DialogBasicDemo,
  DialogNoCloseDemo,
  DialogScrollDemo,
  dialogBasicCode,
  dialogNoCloseCode,
  dialogScrollCode,
}
