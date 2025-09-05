import { Icon } from "../ui/banner";
import SectionWrapper from "./section-wrapper";

export default function Footer() {
  return (
    <footer className="border-t">
      <SectionWrapper className="relative">
        <Icon positionX="left" positionY="top" />
        <Icon positionX="right" positionY="top" />
        Footer
      </SectionWrapper>
    </footer>
  )
}
