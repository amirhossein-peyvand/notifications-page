import Navbar from "./components/Navbar";
import ReactNotification from "./components/ReactNotification";
import "./sass/App.scss";
import markWebber from "./assets/avatar-mark-webber.webp";
import nathanPeterson from "./assets/avatar-nathan-peterson.webp";
import FollowNotification from "./components/FollowNotification";
import angelaGray from "./assets/avatar-angela-gray.webp";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <ReactNotification
          fullName="Mark Webber"
          post="My first tournament today!"
          profilePhoto={markWebber}
          text="reacted to your recent post"
          time="1m ago"
        />

        <FollowNotification
          fullName="Angela Gray"
          profilePhoto={angelaGray}
          text="followed you"
          time="5m ago"
        />

        <ReactNotification
          fullName="Nathan Peterson"
          post="5 end-game strategies to increase your win rate"
          profilePhoto={nathanPeterson}
          text="reacted to your recent post"
          time="2 weeks ago"
        />
      </main>
    </div>
  );
}

export default App;
