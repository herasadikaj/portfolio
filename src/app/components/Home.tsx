import { FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <main className="">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-2xl md:text-5xl mb-1">Hera</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Sadikaj</h1>
          <h3 className="text-2xl md:text-4xl mb-8">Web Developer</h3>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://github.com/herasadikaj"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-[#d7bbfa] text-white rounded-full hover:border-[#6C3BAA] w-[250px] sm:w-[200px] text-lg"
            >
              Portfolio
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-[#d7bbfa] text-white rounded-full hover:border-[#6C3BAA] w-[250px] sm:w-[200px] text-lg"
            >
              Resume
            </a>
          </div>

          <div className="mt-12 flex gap-8 justify-center text-4xl">
            <a
              href="https://www.linkedin.com/in/hera-sadikaj-832136245/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.pinterest.com/herasadikaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-white"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.instagram.com/hera.sadikaj/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
