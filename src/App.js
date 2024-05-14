
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contactme" element={<ContactMe/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
