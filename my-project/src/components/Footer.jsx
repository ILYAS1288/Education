    export function Footer (){
        return (
            <div className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
                        <p className="text-gray-400">Stay updated with the latest courses and offers.</p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md text-gray-800"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#C24914] rounded-md hover:bg-[#a63a0b] transition"
                        >               Subscribe                   
                        </button>
                    </form>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    &copy; 2024 Online Learning Platform. All rights reserved.
                </div>
            </div>
        )
    }
    