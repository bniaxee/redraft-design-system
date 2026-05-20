import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const basicFeatures = [
  { title: "Analytics", href: "#", description: "Real-time dashboards and event tracking." },
  { title: "Automation", href: "#", description: "Trigger workflows by event or schedule." },
  { title: "Integrations", href: "#", description: "Connect your tools and sync data." },
]

const navigationMenuBasicCode = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const features = [
  { title: "Analytics", href: "#", description: "Real-time dashboards and event tracking." },
  { title: "Automation", href: "#", description: "Trigger workflows by event or schedule." },
  { title: "Integrations", href: "#", description: "Connect your tools and sync data." },
]

export function NavigationMenuBasicDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-64">
              {features.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="font-medium leading-none">{item.title}</div>
                      <p className="text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`

function NavigationMenuBasicDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-64">
              {basicFeatures.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="font-medium leading-none">{item.title}</div>
                      <p className="text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const gridResources = [
  { title: "Quick Start", href: "#", description: "Up and running in five minutes." },
  { title: "API Reference", href: "#", description: "Complete docs for every endpoint." },
  { title: "Guides", href: "#", description: "Step-by-step tutorials for common tasks." },
  { title: "Examples", href: "#", description: "Working projects you can clone and deploy." },
]

const navigationMenuGridCode = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const resources = [
  { title: "Quick Start", href: "#", description: "Up and running in five minutes." },
  { title: "API Reference", href: "#", description: "Complete docs for every endpoint." },
  { title: "Guides", href: "#", description: "Step-by-step tutorials for common tasks." },
  { title: "Examples", href: "#", description: "Working projects you can clone and deploy." },
]

export function NavigationMenuGridDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[440px] grid-cols-2 gap-0.5">
              {resources.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="font-medium leading-none">{item.title}</div>
                      <p className="text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`

function NavigationMenuGridDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[440px] grid-cols-2 gap-0.5">
              {gridResources.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="font-medium leading-none">{item.title}</div>
                      <p className="text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const noViewportItems = [
  { title: "Account", href: "#" },
  { title: "Notifications", href: "#" },
  { title: "Security", href: "#" },
  { title: "Privacy", href: "#" },
]

const navigationMenuNoViewportCode = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const settingsItems = [
  { title: "Account", href: "#" },
  { title: "Notifications", href: "#" },
  { title: "Security", href: "#" },
  { title: "Privacy", href: "#" },
]

export function NavigationMenuNoViewportDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-44">
              {settingsItems.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    {item.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`

function NavigationMenuNoViewportDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-44">
              {noViewportItems.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    {item.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export {
  NavigationMenuBasicDemo,
  navigationMenuBasicCode,
  NavigationMenuGridDemo,
  navigationMenuGridCode,
  NavigationMenuNoViewportDemo,
  navigationMenuNoViewportCode,
}
