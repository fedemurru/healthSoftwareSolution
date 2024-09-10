export default function Contact() {
	return (
		<section className="container mx-auto py-16">
			<h1 className="text-3xl font-bold text-center text-primary mb-8">
				Contact Us
			</h1>
			<form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow">
				<div className="mb-4">
					<label className="block text-gray-700">Name</label>
					<input type="text" className="w-full px-4 py-2 border rounded-lg" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input type="email" className="w-full px-4 py-2 border rounded-lg" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700">Message</label>
					<textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
				</div>
				<button className="w-full bg-primary text-white px-4 py-2 rounded-lg">
					Send Message
				</button>
			</form>
		</section>
	);
}
