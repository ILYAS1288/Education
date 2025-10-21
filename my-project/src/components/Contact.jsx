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
                        <a href="mailto:" className="text-[#C24914] underline"> 
                            </a>    or call us at 
                        <a href="tel:" className="text-[#C24914] underline"> </a>.
                    </p>
                    <button className="bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Get in Touch
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/i1.png"
                        alt="Contact Us"
                        className="w-full h-auto rounded-lg "
                    />
                </div>
            </div>
        </div>
    );
}       