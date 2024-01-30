import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
    return <Router>
        <NavBar />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>;
}
export default App