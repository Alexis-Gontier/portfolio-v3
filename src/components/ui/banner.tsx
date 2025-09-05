import { Plus } from "lucide-react"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

type BannerProps = {
  title: string
  direction?: 1 | -1
}

export default function Banner({ title, direction = 1 }: BannerProps) {
  return (
    <section className="border-y">
      <div className="relative max-w-3xl mx-auto h-16 px-1 border-x flex justify-center items-center">
        <Icon positionX="left" positionY="top" />
        <Icon positionX="right" positionY="top" />
        <Icon positionX="left" positionY="bottom" />
        <Icon positionX="right" positionY="bottom" />
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={10} direction={direction} className="text-center text-muted-foreground uppercase font-extrabold text-xl">
            <span className="mx-4">{title}</span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </section>
  )
}

export function Icon({
  positionX = "right",
  positionY = "bottom"
}: {
  positionX?: "left" | "right";
  positionY?: "top" | "bottom";
} = {}) {
  const getPositionClasses = () => {
    const positions = {
      'left-top': 'absolute -top-3.5 -left-3.5',
      'right-top': 'absolute -top-3.5 -right-3.5',
      'left-bottom': 'absolute -bottom-3.5 -left-3.5',
      'right-bottom': 'absolute -bottom-3.5 -right-3.5'
    }

    return positions[`${positionX}-${positionY}` as keyof typeof positions]
  }

  return (
    <Plus
      className={`${getPositionClasses()} text-border size-7 bg-background p-px hidden md:inline`}
    />
  )
}