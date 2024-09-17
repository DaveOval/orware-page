import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About , NotFound, PcMaintenance, Services, Contact } from "./pages";
import { Footer, Nav } from "./components";
import "./main.css";

function App() {
  
  return (
    <Router basename="/orware-page" >
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/mantenimiento-pc" element={<PcMaintenance />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App
