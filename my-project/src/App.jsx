import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main1 } from "./components/Main1";
import { Register } from "./components/Register";
import { Main2 } from "./components/Main2";


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
      <Main1/>
      <Register/>
      <Main2/>
    </BrowserRouter>
  );
}