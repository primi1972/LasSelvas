import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles/bootstrap.min-pulse.css";
import Header from "./components/Header";
import InicioPage from "./pages/InicioPage";
import NosotrosPage from "./pages/NosotrosPage";
import MaderasPage from "./pages/MaderasPage";
import MaderasDetallePage from "./pages/MaderasDetallePage";
import PisosPage from "./pages/PisosPage";
import TarimasPage from "./pages/TarimasPage";
import ServiciosPage from "./pages/ServiciosPage";
import CatalogoPage from "./pages/CatalogoPage";
import ContactoPage from "./pages/ContactoPage";
import NoFoundPage from "./pages/NoFoundPage";
import HistoriaPage from './pages/HistoriaPage'
import Footer from "./components/Footer";


function App() {
  return (
    <Fragment>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/maderas" element={<MaderasPage />} />
          <Route path="/maderasDetalle/:id" element={<MaderasDetallePage />} />
          <Route path="/pisos" element={<PisosPage />} />
          <Route path="/tarimas" element={<TarimasPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
