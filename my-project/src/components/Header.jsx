import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const coursesRef = useRef(null);
  const blogRef = useRef(null);

  // close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
      if (blogRef.current && !blogRef.current.contains(e.target)) {
        setBlogOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#F9E0AE] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center gap-2">
          <img src="/images/Vector.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-black">Educare</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>

          {/* Courses Dropdown (opens on click) */}
          <div className="relative" ref={coursesRef}>
            <button
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 focus:outline-none"
              type="button"
              onClick={() => { setCoursesOpen(!coursesOpen); setBlogOpen(false); }}
              aria-expanded={coursesOpen}
              aria-haspopup="true"
            >
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {coursesOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                <Link to="/courses/Web-Development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Web Development </Link>
                <Link to="/courses/data-science" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Data Science</Link>
                <Link to="/courses/design" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Design</Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown (opens on click) */}
          <div className="relative" ref={blogRef}>
            <button
              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 focus:outline-none"
              type="button"
              onClick={() => { setBlogOpen(!blogOpen); setCoursesOpen(false); }}
              aria-expanded={blogOpen}
              aria-haspopup="true"
            >
              Blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {blogOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-10">
                <Link to="/blog/news" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">News</Link>
                <Link to="/blog/tutorials" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Tutorials</Link>
                <Link to="/blog/events" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Events</Link>
                   <Link to="/blog/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Login</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link
            to="/contact"
            className="bg-[#C24914] text-white px-4 py-2 rounded-md shadow hover:bg-[#a63a0b] font-semibold transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-2 px-4 py-2">
            <li>
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* Courses Dropdown Mobile */}
            <li>
              <button
                className="w-full text-left block py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 focus:outline-none"
                onClick={() => setCoursesOpen(!coursesOpen)}
                type="button"
              >
                Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coursesOpen && (
                <ul className="pl-4">
                  <li>
                    <Link to="/courses/web-development" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setCoursesOpen(false); }}>Web Development</Link>
                  </li>
                  <li>
                    <Link to="/courses/data-science" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setCoursesOpen(false); }}>Data Science</Link>
                  </li>
                  <li>
                    <Link to="/courses/design" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setCoursesOpen(false); }}>Design</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog Dropdown Mobile */}
            <li>
              <button
                className="w-full text-left block py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 focus:outline-none"
                onClick={() => setBlogOpen(!blogOpen)}
                type="button"
              >
                Blog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {blogOpen && (
                <ul className="pl-4">
                  <li>
                    <Link to="/blog/news" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setBlogOpen(false); }}>News</Link>
                  </li>
                  <li>
                    <Link to="/blog/tutorials" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setBlogOpen(false); }}>Tutorials</Link>
                  </li>
                  <li>
                    <Link to="/blog/events" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setBlogOpen(false); }}>Events</Link>
                  </li>
                  <li>
                    <Link to="/blog/login" className="block py-2 text-gray-700 hover:bg-blue-50" onClick={() => { setMenuOpen(false); setBlogOpen(false); }}>Login</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 bg-[#C24914] text-white rounded-md shadow hover:bg-[#a63a0b] font-semibold transition text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}