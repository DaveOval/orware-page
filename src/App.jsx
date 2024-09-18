import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About , NotFound, PcMaintenance, Services, Contact } from "./pages";
import { Footer, Nav } from "./components";
import { usePageTitle } from "./hooks/usePageTitle";
import { ScrollToTop } from "./components";
import "./main.css";

function App() {
  
  return (
    <Router basename="/orware-page" >
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<PageWrapper title="Inicio - Orware" Component={Home} />}
          />
          <Route
            path="/contacto"
            element={<PageWrapper title="Contacto - Orware" Component={Contact} />}
          />
          <Route
            path="/mantenimiento-pc"
            element={<PageWrapper title="Mantenimiento PC - Orware" Component={PcMaintenance} />}
          />
          <Route
            path="/servicios"
            element={<PageWrapper title="Servicios - Orware" Component={Services} />}
          />
          <Route
            path="/sobre-nosotros"
            element={<PageWrapper title="Sobre Nosotros - Orware" Component={About} />}
          />
          <Route
            path="*"
            element={<PageWrapper title="Página No Encontrada - Orware" Component={NotFound} />}
          />
        </Routes>
        <Footer />
    </Router>
  )
}

const PageWrapper = ({ title, Component }) => {
  usePageTitle(title);
  return <Component />;
}

export default App
