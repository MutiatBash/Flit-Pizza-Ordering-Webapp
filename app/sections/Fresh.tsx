import Image from 'next/image'
import { IconButton } from '../components/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fresh = () => {
    return(
        <div className="relative flex lg:flex-row md:flex-col justify-between w-full items-center py-4 px-4 lg:py-24 lg:mt-20 md:px-16 lg:px-20">
            <div>
                <Image
                width="350"
                height="350"
                alt="hero image"
                src="/cut-pizza.png"
                className="absolute left-0 pt-10 top-5 "
                /> 
                </div>
            <div className="relative flex flex-row w-[68%] lg:pt-16">
            <div className=" flex flex-col gap-6">
                <h3 className='lg:text-3xl w-[40%] tracking-wider font-semibold '>Daily fresh and always tasty</h3>
                <p className='w-[50%] lg:text-lg lg:leading-[2.2rem]'>There are many variations of passages of lorem ipsum available, but the majority
                haved</p>
            </div>
                <div className="">
                <Image
                width="80"
                height="80"
                alt="hero image"
                src="/garlic.png"
                className=" absolute pt-5 bottom-0 right-[35%]"
                /> 
                </div>
                </div>
        </div>
    )
}

export default Fresh;
