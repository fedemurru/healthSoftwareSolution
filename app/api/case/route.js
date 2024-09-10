import { NextResponse } from "next/server";

export const caseStudies = [
	{
		id: 1,
		title: "Project A",
		description:
			"An overview of Project A showcasing our expertise in React and Laravel.",
		image: "/pexels.jpg",
		link: "/project-a",
	},
	{
		id: 2,
		title: "Project B",
		description:
			"An in-depth look at Project B, highlighting our custom software solutions.",
		image: "/pexels.jpg",
		link: "/project-b",
	},
	{
		id: 3,
		title: "Project C",
		description:
			"A case study on Project C, illustrating our innovative approach to development.",
		image: "/pexels.jpg",
		link: "/project-c",
	},
	// Add more projects as needed
];

export const GET = (req, res) => {
	try {
		if (!caseStudies) {
			return NextResponse.json(
				{ message: "No data available" },
				{ status: 404 }
			);
		}

		return NextResponse.json(caseStudies);
	} catch (error) {
		console.error("Error handling GET request:", error);

		return NextResponse.json(
			{
				message: "An error occurred while processing your request.",
				cause: error.message || "Unknown error",
			},
			{ status: 500 }
		);
	}
};
