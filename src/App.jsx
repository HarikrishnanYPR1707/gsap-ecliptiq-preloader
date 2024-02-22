import "./App.css";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="relative h-screen overflow-hidden border-2 border-purple-500 bg-[#030712]">
      <Preloader />
    </div>
  );
}

export default App;
