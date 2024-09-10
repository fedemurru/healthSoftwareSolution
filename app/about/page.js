import Head from "next/head";

export default function About() {
	return (
		<div>
			<Head>
				<title>About Us - Health Software Solution</title>
			</Head>
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold text-blue-600">About Us</h1>
				<p className="mt-4">
					Health Software Solution was born from the experience of a senior
					developer with 15 years of expertise and a passionate junior
					developer. Our goal is to transform the healthcare industry through
					technology.
				</p>
			</main>
		</div>
	);
}
