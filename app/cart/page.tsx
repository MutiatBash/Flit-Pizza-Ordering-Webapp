"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
	faCircleArrowLeft,
	faArrowLeftLong,
	faNairaSign,
	faCircleChevronLeft,
	faStar,
	faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
// import { CartContext } from "../CartContext";
// import { products } from "../data";
import { Button } from "../components/Button";

export const FoodDetails = () => {
	const [quantity, setQuantity] = useState(0);
	const [selectedOption, setSelectedOption] = useState("");
	// const { category, foodId } = useParams();
	// const { addToCart, setCartItems } = useContext(CartContext);

	// const foods = products[category];
	// const selectedFood = foods?.find((food) => food.id === parseInt(foodId));
	// const successful = () =>
	// 	toast.success(`Added ${selectedFood.title} to cart`, {
	// 		progressclassName: "bg-[#ff5718]",
	// 	});
	// const warning = () =>
	// 	toast.warning(
	// 		"Nothing has been added to cart, please increase the quantity"
	// 	);

	// function handleDrinkSelection(e) {
	// 	setSelectedOption(e.target.value);
	// }

	// function handleAddToCart() {
	// 	let itemAdded = false;
	// 	if (quantity > 0) {
	// 		addToCart({ ...selectedFood, quantity });
	// 		itemAdded = true;
	// 	}

	// 	if (itemAdded) {
	// 		successful();
	// 	} else {
	// 		warning();
	// 	}
	// }

	// function handleQuantityIncrease() {
	// 	setQuantity(quantity + 1);
	// }
	// function handleQuantityDecrease() {
	// 	setQuantity(quantity - 1);
	// }

	return (
		<section className="p-4 py-4 md:p-10 lg:p-16 lg:py-12 flex flex-col my-auto h-full">
			<Link href="/products">
				<div className="py-6">
					{/* <FontAwesomeIcon icon={faArrowLeftLong} size="xl" /> */}
				</div>
			</Link>
			
		</section>
	);
};
