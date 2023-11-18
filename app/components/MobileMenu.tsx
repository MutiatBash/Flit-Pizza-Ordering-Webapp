import { Button } from "./Button";
import Link from "next/link";
import { links } from "./Navbar";

export const MobileMenu = () => {
//   const location = useLocation();
  return (
    <div className="bg-[#22212133] z-30 h-screen w-full inset-x-0 fixed top-[3.2rem]">
      <div className="lg:hidden bg-white w-full space-y-4 p-3 py-6 pb-8 flex flex-col gap-3 items-center h-[60%] justify-center">
        <ul className="lg:hidden flex flex-col items-center gap-8 justify-center">
          {links.map((links) => (
            <li className="group relative">
              <Link
                href={links.url}
                key={links.id}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  links.url ? " text-[#ff7518]" : ""
                }`}
              >
                {links.text}
              </Link>
              <div className="absolute w-full left-0 h-0.5 bg-[#ff7518] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
