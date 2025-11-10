export function Tutorials() {
    return (
        <div className="max-w-7xl mx-auto mt-12 p-6 bg-white rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
            <div className="space-y-6">
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Getting Started with React</h2>
                    <p className="text-gray-600">Date: June 18, 2024</p>
                    <p className="mt-2">
                        This tutorial covers the basics of React, including components, state management, and hooks to help you build dynamic web applications.
                    </p>
                </div>
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Introduction to Machine Learning</h2>
                    <p className="text-gray-600">Date: June 12, 2024</p>
                    <p className="mt-2">
                        Learn the fundamentals of machine learning, including supervised and unsupervised learning techniques, and how to implement them using Python.
                    </p>
                </div>           
                <div className="border-b pb-4">
                    <h2 className="text-2xl font-semibold">Design Principles for Beginners</h2>
                    <p className="text-gray-600">Date: June 5, 2024</p>
                    <p className="mt-2">
                        Explore the core principles of design, including color theory, typography, and layout techniques to create visually appealing projects.
                    </p>
                </div>
            </div>
        </div>
    );
}