import { Button } from "@/components/shadcn-ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import {
  ArrowDown,
  Contact,
  Folders
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-4 text-center">
      <AnimatedShinyText className="group border rounded-full px-4 py-1">
        <span>✨ A la recherche d'une alternance</span>
      </AnimatedShinyText>
      <h1 className="text-6xl font-bold">Alexis Gontier</h1>
      <h2 className="text-4xl">Développeur front-end</h2>
      <p className="max-w-4/5 text-muted-foreground text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum. Harum possimus assumenda nostrum ratione.</p>
      <div className="mt-4 space-x-4">
        <Button
          size="lg"
          className="cursor-pointer"
          asChild
        >
          <a href="#projects">
            <Folders />
            Mes projets
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer"
          asChild
        >
          <a href="#contact">
            <Contact />
            Me contacter
          </a>
        </Button>
      </div>
      <Link href="#about" className="mt-8 p-4 animate-bounce">
        <ArrowDown />
      </Link>
    </div>
  )
}
