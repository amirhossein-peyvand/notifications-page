import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import "./sass/App.scss";
import markWebber from "./assets/avatar-mark-webber.webp";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Notification
          fullName="Mark Webber"
          profilePhoto={markWebber}
          reactionText="reacted to your recent post My first tournament today!"
          time="1m ago"
        />
      </main>
    </div>
  );
}

export default App;
