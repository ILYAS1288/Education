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
            {/* Enhanced Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Comprehensive Web Development Roadmap
                </h2>
                <div className="space-y-8">
                    {/* Step 1: Fundamentals */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 1: Web Development Fundamentals</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">HTML5</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Document structure and semantic markup</li>
                                    <li>Forms and validation</li>
                                    <li>Media elements (audio, video, canvas)</li>
                                    <li>SEO best practices</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">CSS3</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Selectors and specificity</li>
                                    <li>Box model and layout</li>
                                    <li>Flexbox and Grid systems</li>
                                    <li>Animations and transitions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Advanced CSS & Responsive Design */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 2: Advanced CSS & Responsive Design</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Responsive Design Principles</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Mobile-first approach</li>
                                    <li>Media queries and breakpoints</li>
                                    <li>Fluid layouts and typography</li>
                                    <li>CSS frameworks (Bootstrap, Tailwind CSS)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">CSS Preprocessors</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>SASS/SCSS fundamentals</li>
                                    <li>Variables and mixins</li>
                                    <li>Nesting and partials</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: JavaScript & DOM */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 3: JavaScript Mastery</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Core JavaScript</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Variables, data types, and operators</li>
                                    <li>Functions and scope</li>
                                    <li>Arrays and objects</li>
                                    <li>Promises and async/await</li>
                                    <li>ES6+ features</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">DOM Manipulation</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Selecting and modifying elements</li>
                                    <li>Event handling</li>
                                    <li>Form validation</li>
                                    <li>AJAX and Fetch API</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Frontend Frameworks */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 4: Modern Frontend Development</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">React.js</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Components and props</li>
                                    <li>State management (Context, Redux)</li>
                                    <li>Hooks and custom hooks</li>
                                    <li>Routing and navigation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Development Tools</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Package managers (npm, yarn)</li>
                                    <li>Bundlers (Webpack, Vite)</li>
                                    <li>Developer tools and debugging</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 5: Backend Development */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 5: Backend Development</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Node.js & Express</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Server-side JavaScript</li>
                                    <li>RESTful API development</li>
                                    <li>Authentication and authorization</li>
                                    <li>Error handling and middleware</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Databases</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>MongoDB (NoSQL)</li>
                                    <li>PostgreSQL (SQL)</li>
                                    <li>Database design and modeling</li>
                                    <li>ORMs and query builders</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 6: Deployment & Best Practices */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 6: Deployment & Professional Skills</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Version Control & Deployment</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Git fundamentals and workflows</li>
                                    <li>GitHub collaboration</li>
                                    <li>CI/CD pipelines</li>
                                    <li>Cloud platforms (AWS, Vercel, Heroku)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Professional Development</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Code optimization and best practices</li>
                                    <li>Testing and debugging</li>
                                    <li>Security considerations</li>
                                    <li>Portfolio development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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