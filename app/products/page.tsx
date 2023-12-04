import React from "react";
import { MenuCards } from "@/app/components/Cards";
import { IconButton } from "@/app/components/Button";
import { popularDishes } from "@/app/data";
import PageLayout from "../pageLayout/layout";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const page = () => {
	return (
		<PageLayout>
			<section className="py-4 px-4 lg:py-14 md:px-16 lg:px-16">
				<div className="flex flex-row justify-between">
					<IconButton text="Filter" className="text-[#fdfcfd]" icon={faFilter} />
					<div className="flex flex-row lg:gap-12 items-center ">
						<p className="font-bold">Showing all 9 results</p>
						<select><option>Default sorting</option></select>
					</div>
				</div>
				<div className="grid md:grid-cols-3 py-4 lg:py-8 gap-6 lg:gap-8">
					{popularDishes.map((popular, index) => {
						return (
							<MenuCards
								key={index}
								image={popular.src}
								description={popular.description}
								price={popular.price}
								title={popular.title}
							/>
						);
					})}
				</div>
			</section>
		</PageLayout>
	);
};

export default page;
