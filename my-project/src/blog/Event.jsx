export function Event() {
    return (
        <div className="max-w-7xl mt-12 mx-auto p-6 bg-white rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#C24914]">Upcoming Events</h1>
            <div className="space-y-8">
                {/* Web Development Workshop */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">Web Development Workshop</h2>
                    <p className="text-gray-600">Date: July 15, 2024</p>
                    <p className="text-gray-600">Time: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Location: Online (Zoom)</p>
                    <p className="mt-4 text-gray-700">
                        Join us for an immersive workshop on modern web development techniques and best practices. Learn how to build responsive websites using HTML, CSS, and JavaScript. This workshop is perfect for beginners and intermediate developers looking to enhance their skills.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-6 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Register Now
                    </button>
                </div>

                {/* Data Science Seminar */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">Data Science Seminar</h2>
                    <p className="text-gray-600">Date: August 10, 2024</p>
                    <p className="text-gray-600">Time: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Location: Tech </p>
                    <p className="mt-4 text-gray-700">
                        Explore the latest trends in data science and analytics with industry experts. This seminar will cover topics such as machine learning, big data, and data visualization. Network with professionals and gain insights into the future of data science.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-6 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Register Now
                    </button>
                </div>

                {/* Design Thinking Conference */}
                <div className="border-b pb-6">
                    <h2 className="text-2xl font-bold mb-2">Design Thinking Conference</h2>
                    <p className="text-gray-600">Date: September 5, 2024</p>
                    <p className="text-gray-600">Time: 11:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Location: Gilgit</p>
                    <p className="mt-4 text-gray-700">
                        A conference dedicated to innovative design thinking methodologies and their applications. Learn how to solve complex problems creatively and collaborate effectively. This event is ideal for designers, product managers, and entrepreneurs.
                    </p>
                    <button className="mt-4 bg-[#C24914] text-white px-6 py-2 rounded-md shadow hover:bg-[#a63a0b] transition">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
}