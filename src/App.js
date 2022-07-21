import "./App.css";

import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";

function App() {
  return (
    <main className="App">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}

export default App;
