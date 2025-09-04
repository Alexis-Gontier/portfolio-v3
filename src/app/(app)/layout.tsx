import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}
