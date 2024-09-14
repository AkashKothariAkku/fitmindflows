import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Coaches from './pages/Coaches/Coaches';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
