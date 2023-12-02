import Image from 'next/image'
import Hero from '../pagesFolder/Hero'
import Fresh from "../sections/Fresh"
import PopularDishes from '../sections/PopularDishes'
import StrengthSect from '../sections/StrengthSect';

export default function LandingPage() {
  return (
		<section className="flex min-h-screen flex-col justify-between overflow-x-hidden">
			<Hero />
			<Fresh />
			<PopularDishes />
			<StrengthSect/>
		</section>
  );
}