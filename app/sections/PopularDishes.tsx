import React from "react";
import { MenuCards } from "../components/Cards";
import { popularDishes } from "../data";
import Link from "next/link";

const PopularDishes = () => {
	return (
		<section className="py-8 px-4 lg:py-14 md:px-16 lg:px-16">
			<div className="flex flex-col gap-2">
				<p className="text-red-600 font-semibold">Popular Dishes</p>
				<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#030203]">
					Browse our Menu
				</h3>
			</div>
			<div className="grid md:grid-cols-3 py-4 lg:py-8 gap-x-0 gap-y-8 lg:gap-y-12 lg:gap-x-8 h-full">
				{popularDishes.map((popular, index) => {
					return (
						<Link
							href={`products/${popular.id}`}
							key={index}
							className="h-full"
						>
							<MenuCards
								image={popular.src}
								description={popular.description}
								price={popular.price}
								title={popular.title}
							/>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default PopularDishes;
