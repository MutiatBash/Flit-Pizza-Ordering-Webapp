import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { Button } from "../components/Button";
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
	return (
		<div className="w-full h-full px-4 py-8 lg:py-10 lg:px-16 bg-[#fffaec]">
			<div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row gap-y-7 gap-x-8 lg:gap-x-3 lg:justify-between py-10">
				<div className="flex flex-col gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold uppercase">Information</p>
					</div>
					<div className="flex flex-col gap-3 text-sm font-light">
						<div>
							<Link className="hover:text-[#efb64d]" href="/">
								Home
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/blog">
								Blog
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/shop">
								About Us
							</Link>
						</div>
						<div>
							<Link
								className="hover:text-[#efb64d]"
								href="/terms-of-service"
							>
								Menu
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold uppercase">Top Items</p>
					</div>
					<div className="flex flex-col gap-3 text-sm font-light">
						<div>
							<Link
								className="hover:text-[#efb64d] cursor-pointer"
								href="/"
							>
								Pepperoni
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/information">
								Swiss Mushroom
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/shop">
								Barbeque Chicken
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="">
								Vegetarian
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col  gap-3 lg:gap-6 ">
					<div>
						<p className="text-md font-semibold uppercase">Others</p>
					</div>
					<div className="flex flex-col gap-3 text-sm  font-light">
						<div>
							<Link className="hover:text-[#efb64d]" href="/">
								Checkout
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/information">
								Cart
							</Link>
						</div>
						<div>
							<Link className="hover:text-[#efb64d]" href="/shop">
								Product
							</Link>
						</div>
						<div>
							<Link
								className="hover:text-[#efb64d]"
								href="/terms-of-service"
							>
								Locations
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 lg:gap-6 w-full lg:w-1/4">
					<p className="font-semibold uppercase text-sm">Social Media</p>
					<div>
						<p>Signup and get exclusive offers and coupon codes</p>
					</div>
					<Button
						text="Sign up"
						className="uppercase text-white bg-[#efb64d] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
