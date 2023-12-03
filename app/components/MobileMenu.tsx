import { Button } from "./Button";
import Link from "next/link";
import { links } from "./Navbar";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const location = usePathname();
  return (
    <div className="bg-[#2221213e] z-30 h-screen w-full inset-x-0 fixed top-[3.2rem]">
      <div className="lg:hidden bg-white w-full space-y-4 p-3 py-6 pb-8 flex flex-col gap-3 items-center h-[60%] justify-center">
        <ul className="lg:hidden flex flex-col items-center gap-8 justify-center">
          {links.map((links) => (
            <li className="group relative"key={links.id} >
              <Link
                href={links.url}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  links.url === location ? " text-red-500" : ""
                }`}
              >
                {links.text}
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
