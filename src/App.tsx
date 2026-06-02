import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Projects />
      </main>
    </div>
  );
}

export default App;
