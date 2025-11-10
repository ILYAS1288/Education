export function DataScience() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        Data Science Course
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Dive into the world of data with our comprehensive Data Science course. Learn how to analyze, visualize, and interpret complex datasets to make informed decisions.
                    </p>
                    <p className="text-gray-700 text-lg mb-6">
                        Our curriculum covers essential topics such as statistics, machine learning, data visualization, and big data technologies. Join us to become a proficient data scientist and unlock new career opportunities.
                    </p>
                    <button className="bg-[#C24914] text-white px-6 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Enroll Now
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/V.png"
                        alt="Data Science Course"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Comprehensive Data Science Roadmap
                </h2>
                <div className="space-y-8">
                    {/* Step 1: Programming & Statistics */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 1: Programming & Statistics Foundations</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Python Programming</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Variables, data structures, and control flow</li>
                                    <li>Functions, classes, and object-oriented programming</li>
                                    <li>Python libraries (NumPy, Pandas basics)</li>
                                    <li>File handling and data I/O operations</li>
                                    <li>Error handling and debugging</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Statistics & Mathematics</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Descriptive statistics and probability theory</li>
                                    <li>Inferential statistics and hypothesis testing</li>
                                    <li>Linear algebra fundamentals</li>
                                    <li>Calculus basics for machine learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Data Manipulation & Analysis */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 2: Data Manipulation & Analysis</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Data Preprocessing</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Data cleaning and quality assessment</li>
                                    <li>Handling missing values and outliers</li>
                                    <li>Feature scaling and normalization</li>
                                    <li>Feature engineering and selection</li>
                                    <li>Data transformation techniques</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Exploratory Data Analysis</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Statistical analysis and summary metrics</li>
                                    <li>Correlation analysis and pattern detection</li>
                                    <li>Time series analysis fundamentals</li>
                                    <li>Data profiling and reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Data Visualization */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 3: Advanced Data Visualization</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Visualization Tools</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Matplotlib for static visualizations</li>
                                    <li>Seaborn for statistical graphics</li>
                                    <li>Plotly for interactive dashboards</li>
                                    <li>Power BI and Tableau for business intelligence</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Visualization Best Practices</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Chart selection and design principles</li>
                                    <li>Interactive visualization techniques</li>
                                    <li>Storytelling with data</li>
                                    <li>Creating effective dashboards</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Machine Learning */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 4: Machine Learning & AI</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Supervised Learning</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Linear and logistic regression</li>
                                    <li>Decision trees and random forests</li>
                                    <li>Support vector machines</li>
                                    <li>Neural networks fundamentals</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Unsupervised Learning</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Clustering algorithms (K-means, hierarchical)</li>
                                    <li>Dimensionality reduction (PCA, t-SNE)</li>
                                    <li>Anomaly detection</li>
                                    <li>Association rule learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 5: Big Data & Cloud Computing */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 5: Big Data & Cloud Technologies</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Big Data Processing</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Apache Hadoop ecosystem</li>
                                    <li>Apache Spark for large-scale data</li>
                                    <li>SQL and NoSQL databases</li>
                                    <li>Data warehousing concepts</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>AWS data services</li>
                                    <li>Google Cloud Platform tools</li>
                                    <li>Azure ML services</li>
                                    <li>Cloud deployment strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 6: Advanced Topics & Career Development */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold mb-4 text-[#C24914]">Step 6: Advanced Topics & Career Development</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Advanced Topics</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Deep learning architectures</li>
                                    <li>Natural language processing</li>
                                    <li>Computer vision basics</li>
                                    <li>Time series forecasting</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Professional Development</h4>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Building a data science portfolio</li>
                                    <li>Industry project experience</li>
                                    <li>Interview preparation</li>
                                    <li>Career path guidance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section - Keep existing benefits section */}
            {/* ...existing benefits section code... */}

            {/* Call-to-Action Section */}
            <div className="mt-12 bg-[#F9E0AE] p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#C24914] mb-4">
                    Ready to Become a Data Scientist?
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Join thousands of learners who have transformed their careers with our Data Science course. Start your journey today!
                </p>
                <button className="bg-[#C24914] text-white px-8 py-3 rounded-md shadow hover:bg-[#a63a0b] transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}