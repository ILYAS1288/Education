export  function DataScience() {
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
        </div>
    );
}