"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Experience</Link>
          </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Projects</Link>
          </NavigationMenuLink>
      </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
