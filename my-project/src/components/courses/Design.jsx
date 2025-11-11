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
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Comprehensive Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Comprehensive Design Roadmap
                </h2>
                <div className="space-y-8">
                    {/* Step 1: Design Fundamentals */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 1: Design Fundamentals & Theory</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Color Theory</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Color models (RGB, CMYK, HSL)</li>
                                    <li>Color harmonies and psychology</li>
                                    <li>Contrast and accessibility</li>
                                    <li>Mood and emotion through color</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Typography</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Font families and typeface selection</li>
                                    <li>Font pairing and hierarchy</li>
                                    <li>Kerning, leading, and spacing</li>
                                    <li>Web typography best practices</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Design Principles</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Balance and composition</li>
                                    <li>Emphasis and focal points</li>
                                    <li>Proportion and scale</li>
                                    <li>Unity and harmony in design</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Design Tools & Software */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 2: Master Design Tools & Software</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Adobe Creative Suite</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Photoshop for image editing and design</li>
                                    <li>Illustrator for vector graphics</li>
                                    <li>InDesign for layout and publications</li>
                                    <li>XD for UI/UX prototyping</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Modern Design Tools</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Figma for collaborative design</li>
                                    <li>Sketch for interface design</li>
                                    <li>Canva for quick design solutions</li>
                                    <li>Affinity Suite as Adobe alternatives</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Additional Tools</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Prototyping tools (Prototype.io, Framer)</li>
                                    <li>Animation tools (After Effects, Lottie)</li>
                                    <li>Screen design and wireframing</li>
                                    <li>Asset management and version control</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: User Experience (UX) Design */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 3: User Experience (UX) Design</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">UX Research & Analysis</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>User research methodologies</li>
                                    <li>Persona creation and analysis</li>
                                    <li>User journeys and mapping</li>
                                    <li>Usability testing and feedback</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Wireframing & Prototyping</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Low-fidelity wireframes</li>
                                    <li>Information architecture</li>
                                    <li>Interactive prototypes</li>
                                    <li>Design systems and components</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Accessibility & Inclusivity</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>WCAG guidelines and standards</li>
                                    <li>Color contrast and readability</li>
                                    <li>Keyboard navigation</li>
                                    <li>Screen reader optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: User Interface (UI) Design */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 4: User Interface (UI) Design</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Interface Design</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Button design and interaction states</li>
                                    <li>Form design and validation</li>
                                    <li>Navigation patterns and menus</li>
                                    <li>Icons and visual elements</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Responsive Design</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Mobile-first design approach</li>
                                    <li>Breakpoints and responsive layouts</li>
                                    <li>Touch interface design</li>
                                    <li>Cross-device consistency</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Design Systems</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Component libraries and style guides</li>
                                    <li>Design tokens and variables</li>
                                    <li>Atomic design methodology</li>
                                    <li>Documentation and handoff</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 5: Advanced Design Techniques */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 5: Advanced Design Techniques</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Motion & Animation</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>CSS animations and transitions</li>
                                    <li>Micro-interactions and feedback</li>
                                    <li>Motion graphics fundamentals</li>
                                    <li>After Effects for animation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Branding & Identity</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Logo design principles</li>
                                    <li>Brand guidelines and identity systems</li>
                                    <li>Visual brand storytelling</li>
                                    <li>Brand consistency across channels</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Advanced Design Areas</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>3D design and visualization</li>
                                    <li>Data visualization and infographics</li>
                                    <li>Web design trends and best practices</li>
                                    <li>Print design and production</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                               
                    {/* Step 6: Professional Development & Portfolio */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 6: Portfolio & Professional Development</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Portfolio Building</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Case study creation and documentation</li>
                                    <li>Project showcase and presentation</li>
                                    <li>Personal portfolio website design</li>
                                    <li>Design portfolio platforms (Dribbble, Behance)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Real-World Projects</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Logo and branding projects</li>
                                    <li>Website design and development</li>
                                    <li>App UI/UX design</li>
                                    <li>Marketing collateral design</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Career Development</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Freelancing and client management</li>
                                    <li>Interview preparation</li>
                                    <li>Industry networking and communities</li>
                                    <li>Staying updated with design trends</li>
                                </ul>
                            </div>
                        </div>
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