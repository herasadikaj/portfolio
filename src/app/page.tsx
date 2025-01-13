import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portofolio";
import Resume from "./components/Resume";

export default function Main() {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Header />
        <section id="home" className="border-b border-white border-opacity-30 w-full">
          <Home />
        </section>
        <section id="about" className="border-b border-white border-opacity-30 w-full">
          <About />
        </section>
        <section id="resume" className="border-b border-white border-opacity-30 w-full">
          <Resume />
        </section>
        <section id="portfolio" className="border-b border-white border-opacity-30 w-full">
          <Portfolio />
        </section>
        <section id="footer" className="w-full">
          <Footer />
        </section>
      </div>
    </div>
  );
}
