import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogSection from "./components/Blogsection ";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <BlogSection/>
      <Contact/>
    </div>
  );
}
