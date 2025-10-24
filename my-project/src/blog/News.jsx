export default function News() {
    return (
        <div className="max-w-7xl  mt-12  mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            <div className="space-y-6">
                {/* Sample News Article */}
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Educare Launches New Course on AI</h2>
                    <p className="text-gray-600">Date: June 20, 2024</p>
                    <p className="mt-2">
                        We are excited to announce the launch of our new course on Artificial Intelligence, designed to equip learners with cutting-edge skills in AI development and applications.
                    </p>
                </div>

                {/* Sample News Article */}
                <div className="border-b pb-4">
                    <h2 className="     text-2xl font-semibold">Partnership with Tech Giants</h2>
                    <p className="text-gray-600">Date: June 10, 2024</p>
                    <p className="mt-2">
                        Educare has partnered with leading technology companies to provide students with exclusive internship opportunities and real-world project experience.
                    </p>
                </div>

                {/* Sample News Article */}
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">New Learning Platform Features</h2>
                    <p className="text-gray-600">Date: May 30, 2024</p>
                    <p className="mt-2">
                        Our learning platform has been upgraded with new features including interactive quizzes, peer collaboration tools, and personalized learning paths to enhance the student experience.
                    </p>
                </div>
            </div>
        </div>
    );
}