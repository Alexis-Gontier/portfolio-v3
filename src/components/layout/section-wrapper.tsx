import { Plus } from "lucide-react"

type SectionWrapperProps = {
  children?: React.ReactNode
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="border-y px-4">
      <div className="relative max-w-xl mx-auto min-h-20 p-8 border-x">
        <Icon positionX="left" positionY="top" />
        <Icon positionX="right" positionY="top" />
        <Icon positionX="left" positionY="bottom" />
        <Icon positionX="right" positionY="bottom" />
        {children}
      </div>
    </section>
  )
}

function Icon({
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
      className={`${getPositionClasses()} text-border size-7 bg-background p-px`}
    />
  )
}