import { ThemeProvider } from "@/components/theme/theme-provider"

type ProvidersProps = {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
    </>
  )
}
