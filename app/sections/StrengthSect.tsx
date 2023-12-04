import React from 'react'
import { ourStrengths } from '../data';
import { StrengthCards } from '../components/Cards';
import Image from 'next/image';
import pizza from "../../public/half-pizza.png"


const StrengthSect = () => {
  return (
		<section className="py-8 px-4 lg:py-14 md:px-16 bg-[#fffaec] relative flex flex-col gap-4">
			<div className="absolute right-0 w-[25%] lg:w-[20%] lg:top-10">
				<Image src={pizza} alt="pizza" />
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-red-600 font-semibold">Our Strength</p>
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#030203] capitalize">
					Why we are the best?
				</h3>
			</div>
			<div className="grid md:grid-cols-4 py-4 lg:py-8 gap-6 gap-y-8 ">
				{ourStrengths.map((strength, index) => {
					return (
						<StrengthCards
							key={index}
							image={strength.src}
							// iconStyle={20}
							description={strength.description}
							title={strength.title}
						/>
					);
				})}
			</div>
			{/* <div className='absolute'><Image src={pizza} alt="pizza"/></div> */}
		</section>
  );
}

export default StrengthSect
