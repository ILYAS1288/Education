 export function Login() {
    return(
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Login Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#C24914] mb-6">
                        Member Login
                    </h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Welcome back! Please log in to access your account and continue your learning journey with us.
                    </p>
                </div>        
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-[#C24914] mb-4">Login to Your Account</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C24914]"
                        />
                        <button
                            type="submit"
                            className="bg-[#C24914] text-white font-semibold py-2 px-6 rounded hover:bg-[#a63a0b] transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>  
    )
 }