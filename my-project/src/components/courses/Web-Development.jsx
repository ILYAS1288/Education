export function WebDeveploment() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        Web Development Course
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Learn how to build modern, responsive, and dynamic websites from scratch. Our Web Development course covers everything from HTML and CSS to advanced JavaScript frameworks.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Whether you're a beginner or looking to enhance your skills, this course will guide you step-by-step to become a proficient web developer.
                    </p>
                    <button className="bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Enroll Now
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/V.png"
                        alt="Web Development Course"
                        className="w-full h-auto rounded-lg "
                    />
                </div>
            </div>

            {/* Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Step-by-Step Roadmap to Becoming a Web Developer
                </h2>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 1: Learn the Basics</h3>
                        <p className="text-gray-700">
                            Start with the fundamentals of web development, including HTML, CSS, and JavaScript. Understand how these technologies work together to create websites.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 2: Master Responsive Design</h3>
                        <p className="text-gray-700">
                            Learn how to create mobile-friendly websites using CSS frameworks like Bootstrap and Tailwind CSS. Understand the principles of responsive design.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 3: Dive into JavaScript</h3>
                        <p className="text-gray-700">
                            Master JavaScript to add interactivity to your websites. Learn about DOM manipulation, events, and ES6+ features.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 4: Learn Frontend Frameworks</h3>
                        <p className="text-gray-700">
                            Explore popular frontend frameworks like React, Angular, or Vue.js to build dynamic and scalable web applications.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 5: Backend Development</h3>
                        <p className="text-gray-700">
                            Learn backend technologies like Node.js, Express, and databases (SQL and NoSQL). Understand how to build APIs and manage server-side logic.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 6: Version Control and Deployment</h3>
                        <p className="text-gray-700">
                            Use Git and GitHub for version control. Learn how to deploy your websites using platforms like Netlify, Vercel, or Heroku.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-12 bg-[#F9E0AE] p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#C24914] mb-4">
                    Ready to Build Amazing Websites?
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Join thousands of learners who have transformed their careers with our Web Development course. Start your journey today!
                </p>
                <button className="bg-[#C24914] text-white px-8 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}