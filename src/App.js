import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Applications from './pages/Applications';
import ContactMe from './components/ContactMe';
import ContactMePage from './pages/ContactMe';
import ScrollBackToTopButton from './components/ScrollBackToTopButton';

function App() {
  return (
    <div className="App full-height">
      <Navbar></Navbar>
      <ScrollBackToTopButton></ScrollBackToTopButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contactMe" element={<ContactMePage />} />
      </Routes>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;