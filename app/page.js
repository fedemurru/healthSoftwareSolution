import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Health Software Solution</title>
			</Head>
			<main className="container mx-auto px-4 py-16 text-center">
				<h1 className="text-4xl font-bold text-blue-600">
					Welcome to Health Software Solution
				</h1>
				<p className="mt-4 text-lg">
					We offerss innovative software solutions for the healthcare industry.
				</p>
			</main>
		</div>
	);
}
