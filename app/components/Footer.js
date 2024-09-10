// components/Footer.jsx
import Link from "next/link";
import SocialFooter from "./SocialFooter";

export default function Footer() {
	return (
		<footer className="bg-primary p-4 text-white">
			<div className="container mx-auto flex justify-between items-center">
				<p className="text-sm">
					&copy; 2024 Health Software Solution. All rights reserved.
				</p>
				<SocialFooter />
			</div>
		</footer>
	);
}
