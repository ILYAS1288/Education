export function Design() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
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
                        Enroll now and start your journey towards becoming a skilled designer capable of creating stunning visuals for web, print, and more.
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

            {/* Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Step-by-Step Roadmap to Becoming a Designer
                </h2>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 1: Learn the Basics of Design</h3>
                        <p className="text-gray-700">
                            Start with the fundamentals of design, including color theory, typography, and layout principles. Understand how these elements work together to create visually appealing designs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 2: Master Design Tools</h3>
                        <p className="text-gray-700">
                            Get hands-on experience with industry-standard tools like Adobe Photoshop, Illustrator, Figma, and Canva. Learn how to use these tools to bring your creative ideas to life.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 3: Understand User Experience (UX)</h3>
                        <p className="text-gray-700">
                            Dive into the principles of UX design. Learn how to create user-friendly interfaces and experiences that prioritize usability and accessibility.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 4: Work on Real-World Projects</h3>
                        <p className="text-gray-700">
                            Apply your skills by working on real-world projects, such as designing logos, websites, and marketing materials. Build a portfolio that showcases your creativity and expertise.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 5: Learn Advanced Techniques</h3>
                        <p className="text-gray-700">
                            Explore advanced design techniques, such as motion graphics, 3D design, and branding strategies. Stay updated with the latest trends in the design industry.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 6: Build Your Portfolio</h3>
                        <p className="text-gray-700">
                            Create a professional portfolio that highlights your best work. Showcase your skills to potential clients or employers and start your journey as a professional designer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-12 bg-[#F9E0AE] p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#C24914] mb-4">
                    Ready to Start Your Design Journey?
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Join thousands of learners who have transformed their creativity into a career with our Design course. Start your journey today!
                </p>
                <button className="bg-[#C24914] text-white px-8 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}