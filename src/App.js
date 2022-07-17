import "./App.css";

import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default App;
