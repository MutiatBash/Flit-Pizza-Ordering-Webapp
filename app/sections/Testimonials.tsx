import React from 'react'
import { ClientCards } from '../components/Cards';
import { clients } from '../data';
import Image from 'next/image';


const Testimonials = () => {
  return (
		<section className="pt-4 px-4 lg:pt-28 md:px-16 relative pb-0">
            <Image src="/leaf.png" width={100} height={100} alt='leaf' className='absolute left-0 lg:top-0 pt-5'/>
			<div className="flex flex-col gap-2">
				<p className="text-red-600 font-semibold">Customer Feedback</p>
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#030203] capitalize">
					Client Testimonials
				</h3>
			</div>
			<div className="grid md:grid-cols-4 pt-4 lg:pt-8 gap-6">
				{clients.map((client, index) => {
					return (
						<ClientCards
							key={index}
							name={client.name}
							comment={client.comment}
							image={client.src}
						/>
					);
				})}
			</div>
		</section>
  );
}

export default Testimonials
