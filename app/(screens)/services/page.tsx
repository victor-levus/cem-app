import Link from "next/link";
import React from "react";

const ServicesPage = () => {
	return (
		<div>
			<h1 className="text-4xl font-bold mb-3">Services Page</h1>
			<Link href={"/"} className="ml-3">
				<button className="px-4 py-2 bg-green-600 rounded ">Home</button>
			</Link>
		</div>
	);
};

export default ServicesPage;
