import Head from "next/head";

export default function Services() {
	return (
		<div>
			<Head>
				<title>Services - Health Software Solution</title>
			</Head>
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold text-blue-600">Our Services</h1>
				<ul className="mt-8 space-y-4">
					<li className="bg-gray-100 p-4 rounded-lg shadow">
						<h2 className="text-xl font-semibold">
							Patient Management Solutions
						</h2>
						<p>
							Custom software designed to improve efficiency in managing
							patients and medical records.
						</p>
					</li>
					<li className="bg-gray-100 p-4 rounded-lg shadow">
						<h2 className="text-xl font-semibold">Telemedicine</h2>
						<p>
							Innovative tools for remote consultation, simplifying
							communication between doctors and patients.
						</p>
					</li>
				</ul>
			</main>
		</div>
	);
}
