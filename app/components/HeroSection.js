import Image from "next/image";
import Link from "next/link";

// components/HeroSection.jsx
export default function HeroSection() {
	return (
		<section className="bg-white py-16">
			<div className="container mx-auto text-center">
				{/* Heading */}
				<h1 className="text-4xl lg:text-5xl font-bold text-black">
					Welcome to Health Software Solution
				</h1>

				{/* Subheading */}
				<p className="mt-6 text-lg lg:text-xl text-gray-600">
					We offers innovative software solutions for Physiotherapists,
					Chiropractors, Osteopaths, Podiatrists and other Healthcare
					Professionals.
				</p>

				{/* Buttons */}
				<div className="mt-10 flex justify-center space-x-4">
					{/* "Our Work" Button */}
					<Link href="/work">
						<p className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
							Our Work
						</p>
					</Link>

					{/* "About Us" Button */}
					<Link href="/about">
						<p className="border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition">
							About Us
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
