export function WebDeveploment() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Web Development Course</h1>
            <p className="mb-6">Basic courses</p>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.youtube.com/embed/4WjtQjPQGIs"
                    title="Web Development Course"
                    className="max-w-7xl h-full rounded-lg shadow"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}