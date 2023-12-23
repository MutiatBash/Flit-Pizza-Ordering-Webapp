import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/Button";
import { popularDishes } from "@/app/data";
import Image from "next/image";
import small from "../../../public/pizza-icon-sm.jpg";
import medium from "../../../public/pizza-icon-md.jpg";
import large from "../../../public/pizza-icon-lg.jpg";
import Navbar from "@/app/components/Navbar";

const ProductDetails = ({
	params,
}: {
	params: {
		id: number;
		src: string;
		title: string;
		description: string;
		price: number;
	};
}) => {
	const productId = Number(params.id);

	return (
		<section className="flex flex-col my-auto h-full">
			<Navbar />
			<Link href="/products">
				<div className="py-6 px-16">
					<FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
				</div>
			</Link>
			<div className="p-4 py-4 md:p-10 lg:p-16 lg:py-12 ">
				{popularDishes
					.filter((product) => product.id === productId)
					.map((product) => {
						return (
							<div
								key={product.id}
								className="flex flex-col sm:flex-row md:items-center justify-between gap-6 md:gap-12 h-full"
							>
								<div className="w-full sm:w-[40%]">
									<Image
										alt="Product image"
										src={product.src}
										className="object-cover w-full h-[200px] lg:h-[500px]"
										width={500}
										height={400}
									/>
								</div>
								<div className="flex flex-col justify-between gap-5 lg:gap-6 w-full md:w-[45%] ">
									<div className="flex flex-col lg:gap-10">
										<div className="flex flex-col gap-3 lg:gap-5">
											<h3 className="font-bold  lg:text-[2.5rem] text-[1.5rem] lg:leading-[3.5rem]">
												{product.title}
											</h3>
											<div className="flex flex-row gap-4 items-center">
												<p className="font-semibold text-[1.2rem] text-red-600">
													$ {product.price}
												</p>
												<span className="text-sm text-gray-400">
													8 Reviews
												</span>
											</div>
											<p className="text-base sm:w-[88%] text-gray-800 lg:text-lg">
												{product.description}
											</p>
											<div>
												<p className="text-gray-600">
													Category: Chicken, Lunch, Pizza, Burger
												</p>
											</div>
											<div>
												<p className="text-gray-600">
													Tags: Healthy, Organic, Chicken, Sauce
												</p>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-2 lg:py-8">
										<p>Choose Pizza Size</p>
										<div className="flex flex-row gap-8 items-center">
											<div className="relative pl-0 p-2">
												<Image
													src={small}
													height={60}
													width={60}
													alt="small"
												/>
												<span className="absolute bg-red-500 text-xs rounded-full p-2 text-white top-0 right-0">
													Small
												</span>
											</div>
											<div className="relative p-2">
												<Image
													src={medium}
													height={80}
													width={80}
													alt="small"
												/>
												<span className="absolute bg-red-500 text-xs rounded-full p-2 text-white top-0 right-0">
													Medium
												</span>
											</div>
											<div className="relative p-2">
												<Image
													src={large}
													height={100}
													width={100}
													alt="small"
												/>
												<span className="absolute bg-red-500 text-xs rounded-full p-2 text-white top-0 right-0">
													Large
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-col justify-between lg:justify-start gap-6 lg:gap-10 w-full">
										<div className="flex flex-col">
											<p>Choose additional ingredients</p>
											<div className="flex flex-row gap-2 items-center">
												<input type="checkbox"></input>
												<span>Sauce</span>
											</div>
										</div>
										<div className="flex flex-row gap-6 items-center">
											<input
												type="number"
												className="border border-gray-500 p-4"
											/>
											<Button
												// onClick={handleAddToCart}
												text={"Add to cart"}
												className="text-white w-full px-10 "
											/>
											<div className="border rounded-full border-gray-500 p-4 py-3">
												<FontAwesomeIcon icon={faHeart} />
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
			<Footer />
		</section>
	);
};
export default ProductDetails;
