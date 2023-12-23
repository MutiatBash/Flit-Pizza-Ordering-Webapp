// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import {
// 	faCircleArrowLeft,
// 	faArrowLeftLong,
// 	faNairaSign,
// 	faCircleChevronLeft,
// 	faStar,
// 	faStarHalfStroke,
// } from "@fortawesome/free-solid-svg-icons";
// // import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState, useContext } from "react";
// // import { CartContext } from "../CartContext";
// // import { products } from "../data";
// import { Button } from "../components/Button";

// export const FoodDetails = () => {
// 	const [quantity, setQuantity] = useState(0);
// 	const [selectedOption, setSelectedOption] = useState("");
// 	// const { category, foodId } = useParams();
// 	// const { addToCart, setCartItems } = useContext(CartContext);

// 	// const foods = products[category];
// 	// const selectedFood = foods?.find((food) => food.id === parseInt(foodId));
// 	// const successful = () =>
// 	// 	toast.success(`Added ${selectedFood.title} to cart`, {
// 	// 		progressclassName: "bg-[#ff5718]",
// 	// 	});
// 	// const warning = () =>
// 	// 	toast.warning(
// 	// 		"Nothing has been added to cart, please increase the quantity"
// 	// 	);

// 	// function handleDrinkSelection(e) {
// 	// 	setSelectedOption(e.target.value);
// 	// }

// 	// function handleAddToCart() {
// 	// 	let itemAdded = false;
// 	// 	if (quantity > 0) {
// 	// 		addToCart({ ...selectedFood, quantity });
// 	// 		itemAdded = true;
// 	// 	}

// 	// 	if (itemAdded) {
// 	// 		successful();
// 	// 	} else {
// 	// 		warning();
// 	// 	}
// 	// }

// 	// function handleQuantityIncrease() {
// 	// 	setQuantity(quantity + 1);
// 	// }
// 	// function handleQuantityDecrease() {
// 	// 	setQuantity(quantity - 1);
// 	// }

// 	return (
// 		<section className="p-4 py-4 md:p-10 lg:p-16 lg:py-12 flex flex-col my-auto h-full">
// 			<Link href="/products">
// 				<div className="py-6">
// 					{/* <FontAwesomeIcon icon={faArrowLeftLong} size="xl" /> */}
// 				</div>
// 			</Link>
// 			{selectedFood ? (
// 				<div className="flex flex-col sm:flex-row justify-between gap-6 md:gap-12 h-full">
// 					<div className="w-full sm:w-[40%]">
// 						<img
// 							src={selectedFood.src}
// 							className=" object-cover w-full rounded-lg h-[200px] lg:h-[500px]"
// 						/>
// 					</div>
// 					<div className="flex flex-col justify-between gap-5 lg:gap-6 w-full md:w-[45%] ">
// 						<div className="flex flex-col lg:gap-10">
// 							<div className="flex flex-col gap-3">
// 								<h3 className="font-bold  lg:text-[2.5rem] text-[1.5rem] lg:leading-[3.5rem]">
// 									{selectedFood.title}
// 								</h3>
// 								<p className="text-base sm:w-[88%] lg:text-lg">
// 									{selectedFood.details}
// 								</p>
// 							</div>

// 							<div className="flex flex-col gap-3 lg:gap-5">
// 								<div>
// 									<p className="lg:w-[75%] text-gray-600">
// 										Experience a blend of flavours that will leave you
// 										craving for more. Try out our meals and feel your
// 										taste buds rejoice
// 									</p>
// 								</div>
// 								<div className="flex flex-row gap-4 items-center">
// 									<p className="font-semibold text-[1.2rem]">
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faNairaSign}
// 												size="sm"
// 											/>
// 										</span>
// 										{selectedFood.price}
// 									</p>
// 									<span className="text-sm bg-orange-100 py-1 px-3 rounded-2xl self-start text-[#ff7518] font-bold">
// 										15% off on first order
// 									</span>
// 								</div>
// 								<div className="flex flex-row gap-3">
// 									<span className="italic text-sm">
// 										{selectedFood.rating}
// 									</span>
// 									<div>
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faStar}
// 												style={{ color: "#ffd700" }}
// 												size="sm"
// 											/>
// 										</span>
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faStar}
// 												style={{ color: "#ffd700" }}
// 												size="sm"
// 											/>
// 										</span>
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faStar}
// 												style={{ color: "#ffd700" }}
// 												size="sm"
// 											/>
// 										</span>
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faStar}
// 												style={{ color: "#ffd700" }}
// 												size="sm"
// 											/>
// 										</span>
// 										<span>
// 											<FontAwesomeIcon
// 												icon={faStarHalfStroke}
// 												style={{ color: "#ffd700" }}
// 												size="sm"
// 											/>
// 										</span>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
						
// 						<div className="flex flex-row justify-between lg:justify-start items-center gap-6 w-full">
// 							<div className="flex flex-row items-center">
// 								<button
// 									disabled={quantity === 0}
// 									// onClick={handleQuantityDecrease}
// 									className={` ${
// 										quantity === 0
// 											? "bg-gray-100 hover:shadow-none text-gray-200 font-normal"
// 											: "bg-gray-50"
// 									} px-5 py-3 font-semibold rounded-tl-md rounded-bl-md  border-r hover:shadow`}
// 								>
// 									-
// 								</button>
// 								<span className="font-semibold bg-gray-50 px-5 py-3 text-[#ff7518] w-[fit-content]">
// 									{quantity}
// 								</span>
// 								<button
// 									// onClick={handleQuantityIncrease}
// 									className="bg-gray-50 px-5 py-3 font-semibold rounded-tr-md rounded-br-md  border-l hover:shadow"
// 								>
// 									+
// 								</button>
// 							</div>
// 							<Button
// 								// onClick={handleAddToCart}
// 								text={"Add to cart"}
// 								className="text-white w-full px-6 "
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<p> Meal not found </p>
// 			)}
// 		</section>
// 	);
// };
