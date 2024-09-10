import Image from "next/image";

// components/HeroSection.jsx
export default function HeroSection() {
	return (
		<section id="hero">
			<div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
				{/* Content */}
				<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
					<h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
						Your Ultimate Health Software Solution
					</h1>
					<p className="text-lg text-center lg:text-2xl lg:text-left text-gray-600">
						Experience seamless management of your health with our intuitive
						platforms. Discover powerful features and get started for free
						today.
					</p>
					{/* Buttons Container */}
					<div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
						<a
							href="/about"
							className="p-4 text-sm font-semibold text-white bg-primary rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
						>
							About us
						</a>
					</div>
				</div>

				{/* Image */}
				<div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2 mb-3">
					<Image
						src="/pexels.jpg" // Ensure the path is correct
						alt="Hero Illustration"
						width={1000}
						height={600}
						className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
					/>
				</div>
			</div>
		</section>
	);
}
