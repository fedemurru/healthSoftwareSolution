import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Health Software Solution</title>
			</Head>
			<main className="container mx-auto px-4 py-16 text-center">
				<HeroSection />
				<section id="hero">
					<div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
						{/* Content */}
						<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
							<h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
								Your Health Software Solution
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
				<section id="hero">
					<div className="container flex flex-col lg:flex-row mx-auto p-6 lg:mb-0 mr-3">
						{/* Image */}
						<div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2 mb-3 ">
							<Image
								src="/pexels2.jpg"
								alt="Hero Illustration"
								width={1000}
								height={600}
								className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
							/>
						</div>

						{/* Content */}
						<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2 lg:justify-center lg:items-start ml-5">
							<h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left ">
								How we do it
							</h1>
							<p className="text-lg text-center lg:text-2xl lg:text-left text-gray-600">
								Let’s start with what we don’t do. We don’t ruin your brand by
								basing your marketing strategy around free appointments or
								discounts on social media platforms.
							</p>
							{/* Buttons Container */}
							<div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
								<a
									href="/about"
									className="p-4 text-sm font-semibold text-white bg-primary rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
								>
									Our Work
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
