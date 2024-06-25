import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import CV from "./components/pages/cv"
import Links from "./components/pages/links"


function App() {
  return (
  
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cv" element={<CV />} />
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
      
    </Router>
   
  );
}

export default App;
