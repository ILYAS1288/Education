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
                        className="w-full h-auto rounded-lg "
                    />
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Why Choose Our Data Science Course?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Comprehensive Curriculum</h3>
                        <p className="text-gray-700">
                            Learn everything from data analysis and visualization to machine learning and big data technologies.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Hands-On Projects</h3>
                        <p className="text-gray-700">
                            Work on real-world datasets and projects to gain practical experience and build your portfolio.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
                        <p className="text-gray-700">
                            Learn from industry professionals with years of experience in data science and analytics.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Career Support</h3>
                        <p className="text-gray-700">
                            Get access to career guidance, resume reviews, and interview preparation to land your dream job.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Flexible Learning</h3>
                        <p className="text-gray-700">
                            Learn at your own pace with our online modules and live sessions tailored to your schedule.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Certification</h3>
                        <p className="text-gray-700">
                            Earn a recognized certificate upon course completion to showcase your skills to employers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Step-by-Step Roadmap */}
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#C24914] mb-8">
                    Step-by-Step Roadmap to Becoming a Data Scientist
                </h2>
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 1: Learn the Basics</h3>
                        <p className="text-gray-700">
                            Start with the fundamentals of programming (Python or R), statistics, and data analysis. Build a strong foundation in these areas before diving deeper.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 2: Master Data Manipulation</h3>
                        <p className="text-gray-700">
                            Learn how to clean, preprocess, and manipulate data using libraries like Pandas and NumPy. Understand how to handle missing data and outliers.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 3: Data Visualization</h3>
                        <p className="text-gray-700">
                            Use tools like Matplotlib, Seaborn, and Tableau to create insightful visualizations that help communicate your findings effectively.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 4: Machine Learning</h3>
                        <p className="text-gray-700">
                            Dive into machine learning algorithms, including regression, classification, clustering, and deep learning. Use libraries like Scikit-learn and TensorFlow.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 5: Big Data and Cloud</h3>
                        <p className="text-gray-700">
                            Learn about big data technologies like Hadoop and Spark, and explore cloud platforms like AWS and Google Cloud for scalable data solutions.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4">Step 6: Build a Portfolio</h3>
                        <p className="text-gray-700">
                            Work on real-world projects and create a portfolio to showcase your skills to potential employers.
                        </p>
                    </div>
                </div>
            </div>

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