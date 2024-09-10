// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-primary p-4 text-white">
			<div className="container mx-auto flex justify-between items-center">
				<p className="text-sm">
					&copy; 2024 Health Software Solution. All rights reserved.
				</p>
				<div className="flex space-x-4">
					<Link href="https://facebook.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							Facebook
						</p>
					</Link>
					<Link href="https://twitter.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							Twitter
						</p>
					</Link>
					<Link href="https://linkedin.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							LinkedIn
						</p>
					</Link>
					<Link href="https://instagram.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							Instagram
						</p>
					</Link>
				</div>
			</div>
		</footer>
	);
}
