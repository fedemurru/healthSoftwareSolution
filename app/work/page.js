import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { caseStudies } from "../constants";

const workPage = () => {
	console.log(caseStudies);
	return (
		<div className="bg-gray-50 min-h-screen p-6">
			<header className="bg-primary text-white py-6 mb-12">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">Our Work</h1>
					<p className="text-lg mt-2">
						Explore some of the projects we have successfully delivered.
					</p>
				</div>
			</header>

			<main className="container mx-auto">
				{/* Case Studies Section */}

				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{caseStudies.map((caseStudy, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden"
						>
							<div className="relative w-full h-60">
								<Image
									src={caseStudy.image}
									alt={caseStudy.title}
									layout="fill"
									objectFit="cover"
									className="w-full h-full"
								/>
							</div>
							<div className="p-6">
								<h2 className="text-2xl font-semibold mb-4">
									{caseStudy.title}
								</h2>
								<p className="text-gray-700 mb-4">{caseStudy.description}</p>
								<Link href={`/work/${caseStudy.id}`}>
									<p className="text-primary font-semibold hover:underline">
										Read More
									</p>
								</Link>
							</div>
						</div>
					))}
				</section>
			</main>
		</div>
	);
};

export default workPage;
