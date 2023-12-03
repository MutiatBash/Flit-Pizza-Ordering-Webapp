import Image from 'next/image'
import { IconButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import garlic from "../../public/garlic.png"
import cutPizza from "../../public/cut-pizza.png"

const Fresh = () => {
    return(
        <div className="relative flex lg:flex-row flex-col-reverse justify-between w-full items-center py-8 px-4 lg:py-24 lg:mt-20 md:px-16 lg:px-20">
            <div>
                <Image
                alt="hero image"
                src={cutPizza}
                className="relative lg:absolute -left-8 pt-5 lg:pt-10 top-5 bottom-0"
                /> 
                </div>
            <div className="relative flex flex-row lg:w-[68%]  lg:pt-16">
            <div className=" flex flex-col gap-3 lg:gap-6">
                <h3 className='text-2xl lg:text-3xl lg:w-[40%] tracking-wider font-semibold '>Daily fresh and always tasty</h3>
                <p className='lg:w-[50%] lg:text-lg lg:leading-[2.2rem]'>There are many variations of passages of lorem ipsum available, but the majority
                haved</p>
            </div>
                <div className="">
                <Image
                alt="garlic"
                src={garlic}
                className="w-[13%] right-0 lg:w-[10%] -bottom-10  absolute pt-5 lg:bottom-0 lg:right-[35%]"
                /> 
                </div>
                </div>
        </div>
    )
}

export default Fresh;
