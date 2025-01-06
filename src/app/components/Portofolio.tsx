import Projects from "../data/projects";

export default function Portfolio() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-12 border-b border-white inline-block">
        PROJECTS
      </h1>

      <div className="flex gap-8 justify-center flex-wrap">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[300px] bg-background p-6 rounded-lg"
            style={{
              position: "relative",
              border: "4px solid #6C3BAA",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            <div
              className="absolute text-[#6C3BAA] text-5xl font-bold -top-6 left-4 bg-background px-2"
              style={{
                zIndex: 2,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4 mt-6">{project.name}</h2>

            <p className="text-gray-400">{project.description}</p>

          
            <a
              href={project.link}  
              target="_blank"  
              className="absolute bottom-2 right-2 text-[#d7bbfa] font-bold px-4 py-2 hover:text-[#6C3BAA] transition duration-300"
            >
              More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
