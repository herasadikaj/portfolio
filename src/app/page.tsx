import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portofolio from "./components/Portofolio";
import Resume from "./components/Resume";
export default function Main() {
  return (
    <div className="overflow-y-scroll h-screen text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="container mx-auto">
        <Header />
        <section id="home" className="border-b border-white border-opacity-30">
          <Home />
        </section>
        <section id="about" className="border-b border-white border-opacity-30">
          <About />
        </section>
        <section id="resume" className="border-b border-white border-opacity-30">
          <Resume />
        </section>
        <section id="portfolio" className="border-b border-white border-opacity-30">
          <Portofolio />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}
