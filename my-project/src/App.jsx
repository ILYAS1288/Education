import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Main1 } from "./components/Main1";
import { Register } from "./components/Register";
import { Main2 } from "./components/Main2";
import { Footer } from "./components/Footer";
import { WebDeveploment } from "./components/courses/Web-Development";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { DataScience } from "./components/courses/Data-science";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Root/Home Route */}
        <Route path="/" element={<Home />} />

        {/* Nested Courses Routes */}
        <Route path="/courses">
          <Route path="web-development" element={<WebDeveploment />} />
          <Route path="data-science" element={<DataScience/>} />
          <Route path="design" element={<div>Design Page</div>} />
        </Route>

        {/* Nested Blog Routes */}
        <Route path="/blog">
          <Route path="news" element={<div>News Page</div>} />
          <Route path="tutorials" element={<div>Tutorials Page</div>} />
          <Route path="events" element={<div>Events Page</div>} />
        </Route>

        {/* Other Routes */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Main1 />
      <Register />
      <Main2 />
      <Footer />
    </BrowserRouter>
  );
}