import React, {ReactNode} from "react";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface buttonProps {
    text:string;
    className?:string;
    onClick?:() => void;
};

interface iconButtonProps {
    text:string;
    className:string;
    icon:IconDefinition;
    iconStyle?:React.CSSProperties;
    iconSize?:FontAwesomeIconProps["size"]
    onClick?:() => void;
};

export const Button: React.FC<buttonProps> = ({ text, className, onClick }) => {
    return (
      <div>
        <button
        onClick={onClick}
          className={`w-[fit-content] py-[0.8rem] px-5 whitespace-nowrap  font-bold md:py-[1rem] md:px-6  hover:shadow-md transition-all ease-in ${className}`}
        >
          {text}
        </button>
      </div>
    );
  };
 
  
  export const IconButton: React.FC<iconButtonProps> = ({ text, className, onClick, icon, iconSize, iconStyle }) => {
    return (
      <div>
        <button
        onClick={onClick}
          className={` flex flex-row justify-between items-center gap-x-2 py-[0.8rem] px-5 whitespace-nowrap font-bold  md:py-[1rem] md:px-6 hover:shadow-md transition-all ease-in ${className}`}
        >
            <span>{icon && <FontAwesomeIcon icon={icon} className="icon" style={iconStyle} size={iconSize}/>}</span>
         <span>{text}</span>
        </button>
      </div>
    );
  };