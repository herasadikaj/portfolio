import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portofolio";
import Resume from "./components/Resume";

export default function Main() {
  return (
    <div className="overflow-y-auto h-screen text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <section
          id="home"
          className="border-b border-white border-opacity-30 sm:py-4"
        >
          <Home />
        </section>
        <section
          id="about"
          className="border-b border-white border-opacity-30 sm:py-4"
        >
          <About />
        </section>
        <section
          id="resume"
          className="border-b border-white border-opacity-30 sm:py-4"
        >
          <Resume />
        </section>
        <section
          id="portfolio"
          className="border-b border-white border-opacity-30 sm:py-4 sm:mt-4"
        >
          <Portfolio />
        </section>
        <section id="footer" className="sm:py-4 sm:mt-4">
          <Footer />
        </section>
      </div>
    </div>
  );
}
