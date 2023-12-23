"use client";
import React from "react";
import useCartState from "../store/cartState";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { Button } from "../components/Button";
import Link from "next/link";
import Footer from "../components/Footer";

const Cart = () => {
	const { items } = useCartState();
	return (
		<section className="">
			<Navbar />
			<div className="container mx-auto p-4 text-left flex flex-col justify-center md:py-24">
				{items.length === 0 ? (
					<div className="flex flex-col gap-4 items-center justify-center">
						<p className="text-red-700 text-center md:text-[2rem] capitalize font-semibold">
							Your cart is empty.
						</p>
						<Link href="/products">
							<Button text="View Products" className="text-white" />
						</Link>
					</div>
				) : (
					<div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-0 items-start max-w-full overflow-hidden ">
						<div className="w-full md:w-[68%] overflow-scroll overflow-x-auto ">
							<table className="w-full table-auto">
								<thead className="">
									<tr>
										<th className="py-2 px-4 border-b">Product</th>
										<th className="py-2 px-4 border-b">Name</th>
										<th className="py-2 px-4 border-b">Extra</th>
										<th className="py-2 px-4 border-b">Price</th>
										<th className="py-2 px-4 border-b">Quantity</th>
										<th className="py-2 px-4 border-b">Total</th>
									</tr>
								</thead>
								<tbody>
									{items.map((item) => {
										const itemTotal = (
											item?.quantity * item?.price
										)?.toFixed(2);
										return (
											<tr key={item.id} className="border-b">
												<td className="py-2 px-4">
													<Image
														src={item.imageUrl}
														alt="item img"
														width={80}
														height={80}
													/>
												</td>
												<td className="py-2 px-4">{item.title}</td>
												<td className="py-2 px-4"></td>
												<td className="py-2 px-4">{item.price}</td>
												<td className="py-2 px-4">
													{item.quantity}
												</td>
												<td className="py-2 px-4">
													$
													{(item?.quantity * item?.price)?.toFixed(
														2
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>

						<div className=" bg-gray-900 w-full md:w-[32%] p-6  md:p-10 text-white h-full flex flex-col gap-8 md:gap-12">
							<div className="flex flex-col gap-3">
								<h3 className="uppercase font-bold ">Cart Total</h3>
								<p className="font-semibold">
									Subtotal: <span className="font-normal">$79.60</span>
								</p>
								<p className="font-semibold">
									Discount: <span className="font-normal">$79.60</span>
								</p>
								<p className="font-semibold">
									Total: <span className="font-normal">$79.60</span>
								</p>
							</div>
							<Button
								text="check out now"
								className="uppercase w-full"
							/>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</section>
	);
};

export default Cart;
