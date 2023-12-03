import React from 'react'
import { ourStrengths } from '../data';
import { StrengthCards } from '../components/Cards';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StrengthSect = () => {
  return (
		<section className="py-8 px-4 lg:py-14 md:px-16 bg-[#fffaec]">
			<div className="flex flex-col gap-2">
				<p className="text-red-600 font-semibold">Our Strength</p>
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#030203] capitalize">
					Why we are the best?
				</h3>
			</div>
			<div className="grid md:grid-cols-4 py-4 lg:py-8 gap-6">
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
		</section>
  );
}

export default StrengthSect
