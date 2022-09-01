import "./App.css";

import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Team } from "./components/team";
import { Projects } from "./components/projects";

function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Team />
      <Projects />
    </main>
  );
}

export default App;
