import Image from 'next/image'
import LandingPage from './LandingPage/page'
import LandingPageLayout from './LandingPage/layout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
        <LandingPageLayout><LandingPage/></LandingPageLayout>
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        /> */}

    </main>
  )
}
