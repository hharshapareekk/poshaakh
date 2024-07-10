import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ChatApp from "./components/ChatApp";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Sustainable from './components/Sustainable';
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/chat" element={<ChatApp needFullHeight={true} />} />
        <Route path="/sustainable" element={<Sustainable />} />
        <Route path="/*" element={<NotFound />} needFullHeight={true} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;