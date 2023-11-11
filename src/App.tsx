import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import "./sass/App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Notification />
      </main>
    </div>
  );
}

export default App;
