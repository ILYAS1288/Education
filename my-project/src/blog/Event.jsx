export function Event() {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
            <div className="space-y-6">
                {/* Sample Event */}
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Web Development Workshop</h2>
                    <p className="text-gray-600">Date: July 15, 2024</p>
                    <p className="mt-2">
                        Join us for an immersive workshop on modern web development techniques and best practices.
                    </p>
                </div>

                {/* Sample Event */}
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Data Science Seminar</h2>
                    <p className="text-gray-600">Date: August 10, 2024</p>
                    <p className="mt-2">
                        Explore the latest trends in data science and analytics with industry experts.
                    </p>
                </div>

                {/* Sample Event */}
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Design Thinking Conference</h2>
                    <p className="text-gray-600">Date: September 5, 2024</p>
                    <p className="mt-2">
                        A conference dedicated to innovative design thinking methodologies and their applications.
                    </p>
                </div>
            </div>
        </div>
    );
}   