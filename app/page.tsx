"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import {Footer} from "./components/footer";

const navigation = [
	{ name: "Credits", href: "/projects" },
	// { name: "Store", href: "/store" },
	{ name: "Booking", href: "/booking" },
	// { name: "About", href: "/about" },
	
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-base duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={50}
			/>
			<h1 id="ONEX RECORDS" className=" h1word z-10 text-3xl text-transparent duration-800 bg-white cursor-default animate-title sm:text-6xl align-middle md:text-9xl bg-clip-text   ">
				<Link className="transition delay-350 text-fuchsia-500 hover:text-fuchsia-300 ease-in-out duration-300 "href={"/store"}>1X</Link>RECORDS
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Audio Engineering | Production
					
					<br />
					<br />
					Based in LA

				</h2>
			
			</div>
			
			{/* <nav className="my-16 animate-fade-in text-xs">
				<Footer/>
			</nav> */}
		</div>
		
		
	);
}
