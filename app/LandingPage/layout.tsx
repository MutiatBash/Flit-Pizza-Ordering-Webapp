import Link from "next/link"
import Navbar from "@/app/components/Navbar"

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <Navbar/>
        {children}
    </section>
  )
}
