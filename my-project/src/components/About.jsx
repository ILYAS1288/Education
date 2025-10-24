export function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        About Us
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Welcome to <span className="font-bold">Educare</span>! We are dedicated to providing high-quality education and resources to help you achieve your goals. Our mission is to empower learners worldwide with the tools and knowledge they need to succeed.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Join our community of passionate learners and educators, and take the first step toward a brighter future. Together, we can unlock your potential and help you achieve your dreams.
                    </p>
                    <button className="bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Learn More
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/i1.png"
                        alt="About Us"
                        className="w-full h-auto rounded-lg   "
                    />
                </div>
            </div>
      
            {/* Call-to-Action Section */}
            <div className="mt-12 bg-[#F9E0AE] p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#C24914] mb-4">
                    Ready to Start Your Learning Journey?
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Join thousands of learners who are already achieving their goals with Educare. Explore our courses, connect with mentors, and grow your skills today!
                </p>
                <button className="bg-[#C24914] text-white px-8 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}