export function Design() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Design Course Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        Design Course
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Our Design course is crafted to help you master the fundamentals of design, from color theory to typography. Whether you're a beginner or looking to enhance your skills, this course offers practical knowledge and hands-on projects to boost your creativity.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Enroll now and start your journey towards becoming a    skilled designer capable of creating stunning visuals for web, print, and more.
                    </p>
                    <button className="bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Enroll Now
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/i1.png"
                        alt="Design Course"
                        className="w-full h-auto rounded-lg "
                    />
                </div>
            </div>
        </div>
    );
}