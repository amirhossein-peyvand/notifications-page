import "./sass/App.scss";
import MarkWebber from "./components/MarkWebber";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="left">
            <p>Notifications</p>
            <span>3</span>
          </div>
          <div className="right">
            <p>Mark all as read</p>
          </div>
        </nav>
      </header>
      <main>
        <MarkWebber />
      </main>
    </div>
  );
}

export default App;
