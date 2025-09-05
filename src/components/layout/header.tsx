import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Icon } from "../ui/banner";

export default function Header() {

  return (
    <header className="sticky top-0 z-100 w-full h-16 border-b bg-background/30 backdrop-blur">
      <nav className="relative h-full max-w-3xl mx-auto px-6 border-x bg-background/30 backdrop-blur flex justify-between items-center">
        <Icon positionX="left" positionY="bottom" />
        <Icon positionX="right" positionY="bottom" />
        <Link href="/" className="text-lg font-bold">
          Algont-ier
        </Link>
        <AnimatedThemeToggler />
      </nav>
    </header>
  )
}
