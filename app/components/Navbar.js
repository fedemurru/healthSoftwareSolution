// components/Header.jsx
"use client";

// components/Header.jsx
import { useState } from "react";
import Link from "next/link";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="bg-primary p-4 text-white">
			<nav className="container mx-auto flex items-center justify-between relative">
				<Link href="/" passHref>
					<div className="text-xl font-bold cursor-pointer">
						Health Software Solution
					</div>
				</Link>
				<button
					onClick={toggleMenu}
					className="text-white w-8 h-8 flex items-center justify-center md:hidden"
					aria-label="Toggle navigation"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>
				<ul
					className={`md:flex md:space-x-4 md:items-center absolute md:static bg-primary w-full md:w-auto transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "top-16" : "top-[-500px]"
					} right-0 md:right-auto`}
				>
					<li>
						<Link href="/" passHref>
							<p className="block p-2 md:p-0" onClick={handleLinkClick}>
								Home
							</p>
						</Link>
					</li>
					<li>
						<Link href="/about" passHref>
							<p className="block p-2 md:p-0" onClick={handleLinkClick}>
								About Us
							</p>
						</Link>
					</li>
					<li>
						<Link href="/services" passHref>
							<p className="block p-2 md:p-0" onClick={handleLinkClick}>
								Services
							</p>
						</Link>
					</li>
					<li>
						<Link href="/contact" passHref>
							<p className="block p-2 md:p-0" onClick={handleLinkClick}>
								Contact
							</p>
						</Link>
					</li>
					{/* Call to Action - Get Started */}
					<li>
						<Link href="/contact">
							<p
								onClick={handleLinkClick}
								className="bg-blue-500 hidden md:block text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
							>
								Get Started
							</p>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
