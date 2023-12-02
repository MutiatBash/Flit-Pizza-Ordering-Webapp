import React from 'react'
import {MenuCards} from '../components/Cards'
import {popularDishes} from "../data"


const PopularDishes = () => {
  return (
		<section className="py-4 px-4 lg:py-14 md:px-16 lg:px-20">
			<div className='flex flex-col gap-2'>
                <p className='text-red-600 font-semibold'>Popular Dishes</p>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#030203]'>Browse our Menu</h3>
            </div>
			<div className="grid md:grid-cols-3 py-4 lg:py-8 gap-6 lg:gap-8">
				{popularDishes.map((popular, index) => {
					return <MenuCards key={index} image={popular.src} description={popular.description} price={popular.price} title={popular.title} />;
				})}
			</div>
		</section>
  );
}

export default PopularDishes
