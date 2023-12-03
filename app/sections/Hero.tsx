import Image from 'next/image'
import { IconButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
			<div className=" flex flex-col lg:flex-row mt-6 lg:mt-10 justify-between w-full text-center lg:text-left items-center py-8 px-4 lg:py-8 md:px-16 lg:px-20">
				<div className="lg:w-[50%] flex flex-col gap-3 lg:pt-14 items-center lg:items-start">
					<h1 className="text-3xl lg:text-6xl lg:w-[80%] font-semibold lg:leading-[4.1rem]">
						Handmade, With an Extra Pinch of{" "}
						<span className="text-red-600">Love</span>
					</h1>
					<p className="lg:w-[80%] lg:text-xl tracking-wider">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<IconButton
						icon={faCartShopping}
						iconSize='sm'
						text={"ORDER NOW"}
						className="text-white bg-[#efb64d] rounded-full upppercase mt-2 px-4"
					/>
				</div>
				<div className="hidden lg:block w-[45%] relative">
					{/* <div className=""> */}
					<div className="z-20 w-full pr-20 mr-10">
						<Image
							width="450"
							height="450"
							alt="hero image"
							src="/hero-pizza.png"
							className="mr-16"
						/>
					</div>
					<div>
						<Image
							width="70"
							height="70"
							alt="onion"
							src="/pizza-onion.png"
							className="absolute bottom-5 -left-16"
						/>
					</div>
					<div>
						<Image
							width="180"
							height="180"
							alt="hero image"
							src="/pizza-2.png"
							className="absolute right-[25%] pt-5 "
						/>
					</div>
					<div className="rounded-full w-[700px] bg-[#efb64d] h-[700px] absolute left-[40%] -z-20 -top-14 "></div>
					{/* </div> */}
				</div>
			</div>
		);
}

export default Hero;
