import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      < Hero />     
      < About />
      < Skills />
      < Project />
      < Contact />
    </div>
  );
}

export default App;
