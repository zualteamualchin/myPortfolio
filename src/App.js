import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Expreience } from "./components/Expreience";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <Contact />
      {/* <Projects /> */}
      {/* <hr /> */}
      {/* <Expreience /> */}
    </>
  );
}

export default App;
