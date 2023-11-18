import Image from 'next/image'
import { IconButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return(
        <div className="flex lg:flex-row md:flex-col mt-10 justify-between w-full items-center py-4 px-4 md:px-16 lg:px-20">
            <div className=" w-[60%] flex flex-col space-y-3">
                <h1 className='lg:text-6xl mb-4 w-[65%] font-semibold lg:leading-[4.1rem]'>Handmade, With an Extra Pinch of <span>Love</span></h1>
                <p className='mb-4 w-[70%] lg:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <IconButton icon={faCartShopping} text={"ORDER NOW"} className="text-white capitalize"/>
            </div>
            <div className="right">
                {/* <img className='rounded-xl object-cover' src={heroImg} alt="hero-image" /> */}
            </div>
        </div>
    )
}

export default Hero;
