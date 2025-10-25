export function Footer() {
    return (
        <footer className="bg-[#F9E0AE] text-black py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/images/Vector.png" 
                        alt="Logo"
                        className="h-12 w-12 mb-4"
                    />
                    <p className="text-center md:text-left">
                        Educare is your trusted platform for learning and growth. Join us to explore endless opportunities.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-[#C24914] transition">Home</a></li>
                        <li><a href="/courses" className="hover:text-[#C24914] transition">Courses</a></li>
                        <li><a href="/about" className="hover:text-[#C24914] transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-[#C24914] transition">Contact</a></li>
                    </ul>
                </div>
                  
                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="h-8 w-8 hover:opacity-80 transition"
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                                className="h-8 w-8 hover:opacity-80 transition"
                            />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
                                alt="Twitter"
                                className="h-8 w-8 hover:opacity-80 transition"
                            />
                        </a>
                    </div>   
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm border-t border-gray-300 pt-4">
                <p>&copy; {new Date().getFullYear()} Educare. All rights reserved.</p>
            </div>
        </footer>
    );
}
