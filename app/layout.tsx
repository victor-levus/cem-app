import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./global/Navbar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "CEM App",
	description: "App for Call taking solution for Call Center",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-400 bg-slate-950 h-[100vh]`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
