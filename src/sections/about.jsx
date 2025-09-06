export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-yellow-400">Gannah Eltonsy</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Full Stack Developer • HTML • CSS • JavaScript • React • NodeJS
          </p>
        </div>

        <div className="rounded-xl border border-gray-700 p-4 sm:p-6 bg-gray-900/40">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-400">About Me</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
            I'm Gannah Eltonsy, I'm currently studying web development to build accessible web apps
            with React and NodeJS focusing on clean UX and maintainable code. I enjoy reading and
            building a web page from scratch, learning new technologies, optimizing performance, and
            turning ideas into usable products.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href="#projects"
              className="inline-flex justify-center px-4 sm:px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center px-4 sm:px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
