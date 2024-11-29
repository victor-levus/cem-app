import React from "react";

interface Props {
	className?: string;
	title: string;
	type: "submit" | "reset" | "button";
}

const AppButton = ({ className, title, type = "button" }: Props) => {
	return (
		<button
			type={type}
			className={`w-full py-2 rounded-md text-lg font-bold ${className}`}
		>
			{title}
		</button>
	);
};

export default AppButton;
