import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}