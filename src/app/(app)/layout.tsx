import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-500">
        {children}
      </main>
      <Footer />
    </>
  )
}
