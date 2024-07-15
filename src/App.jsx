import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About"
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
      <About />
    </section>
    <section id="Skills">
      <Skills />
    </section>
    <section id="Projects">
      <Project />
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
