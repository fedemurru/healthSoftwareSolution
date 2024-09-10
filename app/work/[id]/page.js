"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/app/constants";

export default function ProjectDetail({ searchParams }) {
	const { Id } = searchParams;

	const router = useRouter();

	return (
		<div className="bg-gray-50 min-h-screen p-6">
			<header className="bg-primary text-white py-6 mb-12">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">{caseStudies.title}</h1>
					<p className="text-lg mt-2">{caseStudies.description}</p>
				</div>
			</header>

			<main className="container mx-auto">
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="relative w-full h-80">
						<Image
							src={caseStudies.image}
							alt={caseStudies.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
						/>
					</div>
					<div className="p-6">
						<p className="text-gray-700 mb-6">{caseStudies.content}</p>
						<Link href="/our-work">
							<p className="text-primary font-semibold hover:underline">
								Back to Our Work
							</p>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
