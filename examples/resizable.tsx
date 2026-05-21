import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const resizableDefaultCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDefault() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`

function ResizableDefaultDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

const resizableHandleCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableWithHandle() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize="30%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Notes</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Preview</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`

function ResizableWithHandleDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize="30%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Notes</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Preview</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

const resizableVerticalCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableVertical() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-[280px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="60%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Editor</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Output</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`

function ResizableVerticalDemo() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-[280px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="60%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Editor</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Output</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

const resizableNestedCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableNested() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[300px] max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Files</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="60%">
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="40%">
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`

function ResizableNestedDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-[300px] max-w-lg rounded-lg border"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Files</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="60%">
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="40%">
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export {
  ResizableDefaultDemo,
  ResizableWithHandleDemo,
  ResizableVerticalDemo,
  ResizableNestedDemo,
  resizableDefaultCode,
  resizableHandleCode,
  resizableVerticalCode,
  resizableNestedCode,
}
