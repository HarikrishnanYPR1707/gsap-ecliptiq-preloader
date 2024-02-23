import "./App.css";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#030712]">
      <div className="relative h-screen overflow-hidden">
        <Preloader />
      </div>
    </div>
  );
}

export default App;
