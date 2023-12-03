import Image from "next/image";
import LandingPage from "./home/page";
import PageLayout from "./pageLayout/layout";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col justify-between">
			{/* <PageLayout>

			</PageLayout> */}
			<LandingPage />
			{/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        /> */}
		</main>
	);
}
