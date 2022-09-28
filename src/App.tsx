import Countries from "./components/Countries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-very-light-gray-lm dark:bg-very-dark-blue-dm dark:text-white-dm">
      <Navbar />
      <Countries />
    </div>
  );
}

export default App;
