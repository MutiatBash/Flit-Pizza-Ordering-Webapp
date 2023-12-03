import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Navbar/>
        {children}
        <Footer/>
    </section>
  )
}
