import Image from "next/image";
import Link from "next/link";

// Fetch project data from the API
async function getProjectData(id) {
	const apiUrl =
		process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/case";
	try {
		const res = await fetch(`${apiUrl}/${id}`);
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		const data = await res.json();
		return data || {};
	} catch (error) {
		console.error("Error fetching project data:", error);
		return {};
	}
}

// ProjectDetail component
export default async function ProjectDetail({ params }) {
	const { id } = params;
	//Get params
	const project = await getProjectData(id);

	// Handle the case where project data is not found
	if (
		!project ||
		!project.title ||
		!project.description ||
		!project.image ||
		!project.content
	) {
		return (
			<p className="text-center text-red-500">
				Project not found or invalid data.
			</p>
		);
	}

	return (
		<div className="bg-gray-50 min-h-screen p-6">
			<header className="bg-primary text-white py-6 mb-12">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold">{project.title}</h1>
					<p className="text-lg mt-2">{project.description}</p>
				</div>
			</header>

			<main className="container mx-auto">
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="relative w-full h-80">
						<Image
							src={project.image}
							alt={project.title}
							fill
							style={{ objectFit: "cover" }}
							className="w-full h-full"
						/>
					</div>
					<div className="p-6">
						<p className="text-gray-700 mb-6">{project.description}</p>
						<Link href="/work">
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
