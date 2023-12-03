import Image from 'next/image'
import Hero from '../sections/Hero'
import Fresh from "../sections/Fresh"
import PopularDishes from '../sections/PopularDishes'
import StrengthSect from '../sections/StrengthSect';
import Testimonials from '../sections/Testimonials';
import PageLayout from '../pageLayout/layout';

export default function LandingPage() {
  return (
		<PageLayout>
			<section className="flex min-h-screen flex-col justify-between overflow-x-hidden">
				<Hero />
				<Fresh />
				<PopularDishes />
				<StrengthSect />
				<Testimonials />
			</section>
		</PageLayout>
  );
}