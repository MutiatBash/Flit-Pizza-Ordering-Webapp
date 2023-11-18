import Image from 'next/image'
import Hero from '../pagesFolder/Hero'

export default function LandingPage() {
  return (
    <section className="flex min-h-screen flex-col justify-between">
        <Hero/>
    </section>
  )
}
