import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { WebDeveploment } from "./components/courses/Web-Development";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { DataScience } from "./components/courses/Data-science";
import { Design } from "./components/courses/Design";
import News from "./blog/News";
import { Event } from "./blog/Event";
import { Tutorials } from "./blog/Tutorials";

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
          <Route path="data-science" element={<DataScience />} />
          <Route path="design" element={<Design />} />
        </Route>

        {/* Nested Blog Routes */}
        <Route path="/blog">
          <Route path="news" element={<News />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="events" element={<Event />} />
        </Route>

        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}