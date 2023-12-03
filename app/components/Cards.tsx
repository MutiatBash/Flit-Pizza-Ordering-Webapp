import React from "react";
import { IconButton } from "../components/Button";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import Image from "next/image";

interface MenuProps {
	image: string;
	description?: string;
	title?: string;
	price?: number | string;
}

interface StrengthProps {
	title?: string;
	description?: string;
	icon: IconProp;
	iconStyle?: React.CSSProperties;
	iconSize?: FontAwesomeIconProps["size"];
}

interface ClientProps {
	image: string;
	name?: string;
	comment?: string;
}

export const MenuCards = ({ image, description, title, price }: MenuProps) => {
	return (
		<div className="border rounded-lg bg-white w-full p-4 lg:py-5 flex flex-col justify-between">
			<div className="flex flex-col gap-3 lg:gap-2 py-2">
				<Image
					className="object-cover self-center pb-5"
					src={image}
					width={250}
					height={50}
					alt="Product Image"
				/>
				<div className="flex flex-col gap-3">
					<div className="flex flex-row gap-24 items-center">
						<h3 className="font-semibold">{title}</h3>
						<p className="text-sm text-red-600 font-bold">${price}</p>
					</div>
					<div>
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: "#efb64d" }}
						/>
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: "#efb64d" }}
						/>
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: "#efb64d" }}
						/>
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: "#efb64d" }}
						/>
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: "#efb64d" }}
						/>
					</div>
					<p className="text-sm font-extralight">{description}</p>
				</div>
			</div>
			<IconButton
				icon={faCartShopping}
				text={"ORDER NOW"}
				className="text-white bg-[#efb64d] rounded-full capitalize mt-2"
			/>
		</div>
	);
};

export const StrengthCards = ({
	title,
	description,
	icon,
	iconStyle,
	iconSize,
}: StrengthProps) => {
	return (
		<div className="w-full p-4 lg:py-5 ">
			<div className="flex flex-col gap-3 lg:gap-4 items-start">
				{icon && (
					<FontAwesomeIcon
						icon={icon as IconProp}
						style={iconStyle}
						size={iconSize}
					/>
				)}
				<h4 className="font-semibold">{title}</h4>
				<p className="text-sm font-extralight">{description}</p>
			</div>
		</div>
	);
};

export const ClientCards = ({ image, comment, name }: ClientProps) => {
	return (
		<div className="border rounded-lg bg-white w-full p-4 lg:py-5 flex flex-col justify-between">
			<div className="flex flex-col gap-3 lg:gap-4 py-2 items-center text-center">
				<Image
					className="object-cover rounded-full"
					src={image}
					width={120}
					height={70}
					alt="client Image"
				/>
				<div className="flex flex-col gap-3">
					<h3 className="font-semibold">{name}</h3>
					<p className="text-sm font-extralight">{comment}</p>
				</div>
			</div>
		</div>
	);
};
