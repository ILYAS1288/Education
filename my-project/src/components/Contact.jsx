export function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Contact Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        Contact Us
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        We would love to hear from you! Whether you have questions about our courses, need support, or just want to say hello, feel free to reach out.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        You can contact us via email at
                        <a href="mailto:info@educare.com" className="text-[#C24914] underline"> info@educare.com </a>
                        or call us at
                        <a href="tel:+1234567890" className="text-[#C24914] underline"> +123-456-7890</a>.
                     </p>
                </div>

                    
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-[#C24914] mb-4">Send Us a Message</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                        />
                        <textarea
                            placeholder="Your Message"
                             rows="5"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#C24914] text-white font-semibold py-2 px-6 rounded hover:bg-[#a63a0b] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}