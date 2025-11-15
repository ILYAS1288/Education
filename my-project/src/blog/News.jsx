export default function News() {
    return (
        <div className="max-w-7xl mt-12 mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#C24914]">Latest News</h1>
            <div className="space-y-8">
                {/* News Article 1 */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">Educare Launches New Course on AI</h2>
                    <p className="text-gray-600">Date: June 20, 2024</p>
                    <p className="mt-4 text-gray-700">
                        We are excited to announce the launch of our new course on Artificial Intelligence, designed to equip learners with cutting-edge skills in AI development and applications.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-4 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                                   Read More
                    </button>
                </div>
                {/* News Article  */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">Partnership with Tech Giants</h2>
                    <p className="text-gray-600">Date: June 10, 2024</p>
                    <p className="mt-4 text-gray-700">
                        Educare has partnered with leading technology companies to provide students with exclusive internship opportunities and real-world project experience.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-4 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Read More
                    </button>
                </div>
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">New Learning Platform Features</h2>
                    <p className="text-gray-600">Date: May 30, 2024</p>
                    <p className="mt-4 text-gray-700">
                        Our learning platform has been upgraded with new features including interactive quizzes, peer collaboration tools, and personalized learning paths to enhance the student experience.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-4 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}