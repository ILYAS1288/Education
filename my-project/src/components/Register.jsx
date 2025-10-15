export function Register () {
    return (
        <div className="max-w-7xl  mx-auto p-6 rounded-lg shadow" style={{ backgroundColor: "#F9E0AE" }}>
            <form className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914] flex-1"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914] flex-1"
                />
                <button
                    type="submit"
                    className="bg-[#C24914] text-white font-semibold py-2 px-6 rounded hover:bg-[#a63a0b] transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}