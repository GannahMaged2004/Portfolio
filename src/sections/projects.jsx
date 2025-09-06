import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">Projects</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400">Some things I’ve built recently.</p>

        <div className="mt-8 grid gap-5 sm:gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-900 hover:border-yellow-400 transition block"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 sm:p-5">
                <h3 className="font-semibold text-yellow-400 text-base sm:text-lg">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-300">{p.desc}</p>

                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded bg-yellow-400 text-black font-medium hover:bg-yellow-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
