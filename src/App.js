import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
        <h2>
            This is the Home page.
        </h2>
    </div>
  );
}

function About() {
  return (
    <div className="container">
        <h2>
            This is the About page.
        </h2>
    </div>
  );
}

function Projects() {
  return (
    <div className="container">
        <h2>
            This is the Projects page.
        </h2>
    </div>
  );
}




export default App;
