import Image from 'next/image'
import { IconButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
			<div className=" flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 lg:py-8 md:px-16 lg:px-20">
				<div className=" w-[50%] flex flex-col space-y-3 gap-3 pt-14">
					<h1 className="lg:text-6xl w-[80%] font-semibold lg:leading-[4.1rem]">
						Handmade, With an Extra Pinch of{" "}
						<span className="text-red-600">Love</span>
					</h1>
					<p className="w-[80%] lg:text-xl tracking-wider">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<IconButton
						icon={faCartShopping}
						text={"ORDER NOW"}
						className="text-white bg-[#efb64d] rounded-full capitalize mt-2"
					/>
				</div>
				<div className="h- w-[45%] relative">
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
