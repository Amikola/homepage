import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from "./components/pages/about/about.js"
import Contact from "./components/pages/contact/contact.js"
import CV from "./components/pages/cv"
import Links from "./components/pages/links/links.js"
import { backround } from './services/color';
import BottomBar from './components/BottomBar';


function App() {
  return (
    <div style = {{backgroundColor: backround}}>  
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cv" element={<CV />} />
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
      <BottomBar/>
    </Router>
    </div>
   
  );
}

export default App;
