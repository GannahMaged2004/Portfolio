import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>  
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

    </>
  );
}
