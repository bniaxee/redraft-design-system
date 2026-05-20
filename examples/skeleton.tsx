import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonDefaultCode = `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDefault() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
}`

function SkeletonDefaultDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 shrink-0 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  )
}

const skeletonParagraphCode = `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonParagraph() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}`

function SkeletonParagraphDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

const skeletonCardCode = `import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}`

function SkeletonCardDemo() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}

const skeletonTableCode = `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTable() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="flex items-center gap-4" key={i}>
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  )
}`

function SkeletonTableDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="flex items-center gap-4" key={i}>
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  )
}

export {
  SkeletonDefaultDemo,
  SkeletonParagraphDemo,
  SkeletonCardDemo,
  SkeletonTableDemo,
  skeletonDefaultCode,
  skeletonParagraphCode,
  skeletonCardCode,
  skeletonTableCode,
}
