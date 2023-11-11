import "./sass/App.scss";

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
      <main></main>
    </div>
  );
}

export default App;
