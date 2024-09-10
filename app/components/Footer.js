// components/Footer.jsx
import Link from "next/link";
import {
	faFacebook,
	faXTwitter,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
							<FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
						</p>
					</Link>
					<Link href="https://twitter.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
						</p>
					</Link>
					<Link href="https://linkedin.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
						</p>
					</Link>
					<Link href="https://instagram.com" passHref>
						<p
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
						</p>
					</Link>
				</div>
			</div>
		</footer>
	);
}
