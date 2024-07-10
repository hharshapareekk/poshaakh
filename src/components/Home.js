import About from "./About";
import ChatApp from "./ChatApp";
import Featured from "./Featured";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Sustainable from "./Sustainable";
const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <Gallery />
      <ChatApp />
      <Sustainable />
    </div>
  );
};

export default Home;
