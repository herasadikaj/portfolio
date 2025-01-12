export default function About() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <h1 className="text-5xl font-bold mb-4 border-b border-current inline-block">
          ABOUT
        </h1>

        <a 
          href="mailto:hera.sadikaj@yahoo.com" 
          className="text-[#6C3BAA] hover:text-[#d7bbfa] mb-4"
          style={{ color: 'var(--foreground)' }}
        >
          hera.sadikaj@yahoo.com
        </a>

        <br/>
        <p className="max-w-2xl text-lg mx-auto mb-4">
          Software developer with a Bachelor degree in Computer Science, with a strong focus on React and Next.js. Eager to deepen my knowledge of JavaScript technologies and grow my skills in software development.
        </p>
        <br/>
        <p>-Tirana, Albania-</p>
      </section>
    </>
  );
}
