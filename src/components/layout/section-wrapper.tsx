type SectionWrapperProps = {
  children?: React.ReactNode
  className?: string
}

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={`max-w-3xl mx-auto p-4 md:p-8 border-x ${className}`}>
      {children}
    </section>
  )
}
