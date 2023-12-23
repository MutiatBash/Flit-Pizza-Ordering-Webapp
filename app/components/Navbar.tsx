"use client"

import { useState, useContext } from "react";
// import { CartContext } from "../CartContext";
import Image from "next/image"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import logo from "../../public/pizza-logo.png"
import pizzaHeader from "../../public/pizza-header.png"


export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/products",
    text: "Products",
  },
  {
    id: 3,
    url: "/blog",
    text: "Blog",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
];

const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
  const location = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
		<div className="w-full gap-3 h-full py-2 px-5 md:px-14 lg:py-3 lg:px-16 bg-white sticky top-0 z-20">
			<div className="w-full flex items-center justify-between ">
				<div>
					<Image
						// width="65"
						// height="65"
						alt="nav image"
						src={logo}
						className="w-[60%] top-0 lg:w-full"
					/>
				</div>
				<div>
					<Image
						alt="nav image"
						src={pizzaHeader}
						className="absolute top-0 w-[20%] lg:w-[10%]"
					/>
				</div>
				<div className="flex flex-row space-x-8">
					<ul className="hidden lg:flex items-center justify-between space-x-5 lg:space-x-8">
						{links.map((links) => (
							<li className="group relative" key={links.id}>
								<Link
									href={links.url}
									className={`nav-item text-[#353A43] transition duration-300 ease-in uppercase font-medium ${
										links.url === location ? "text-red-500" : ""
									}`}
								>
									{links.text}
								</Link>
								<div className="absolute w-full left-0 h-0.5 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex flex-row gap-16 items-center justify-between">
						<Link href="/cart">
							<div className="relative">
								<span className="text-[#fdfcfd] w-[fit-content] h-fit bg-red-600 py-[0.18rem] px-[0.6rem] bottom-4 font-bold text-sm absolute left-3 rounded-full ">
									{/* {cartItems.length} */} 4
								</span>
								<FontAwesomeIcon
									icon={faCartShopping}
									size="xl"
									style={{ color: "#0056d6" }}
								/>
							</div>
						</Link>
					</div>
				</div>
				<div className="flex lg:hidden flex-row gap-10 items-center justify-between">
					<Link href="/cart">
						<div className="relative">
							<span className="text-[#fdfcfd] bg-red-600  py-[0.11rem] w-[fit-content] text-center h-5 px-[0.4rem] bottom-3 font-bold text-xs absolute left-3 rounded-full ">
								{/* {cartItems.length} */}2
							</span>
							<FontAwesomeIcon
								icon={faCartShopping}
								size="sm"
								style={{ color: "#0056d6" }}
							/>
						</div>
					</Link>
					<button onClick={handleMenu} className="">
						{menuOpen ? (
							<FontAwesomeIcon icon={faXmark} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</button>
				</div>
			</div>
			{menuOpen && <MobileMenu />}
		</div>
  );
};

export default Navbar;
