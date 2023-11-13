import Navbar from "./components/Navbar";
import ReactNotification from "./components/ReactNotification";
import "./sass/App.scss";
import markWebber from "./assets/avatar-mark-webber.webp";
import nathanPeterson from "./assets/avatar-nathan-peterson.webp";
import FollowNotification from "./components/FollowNotification";
import angelaGray from "./assets/avatar-angela-gray.webp";
import JoinLeaveNotification from "./components/JoinLeaveNotification";
import jacobThompson from "./assets/avatar-jacob-thompson.webp";
import PrivateMessage from "./components/PrivateMessage";
import rizkyHasanuddin from "./assets/avatar-rizky-hasanuddin.webp";

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

        <JoinLeaveNotification
          profilePhoto={jacobThompson}
          fullName="Jacob Thompson"
          text="has joined your group"
          group="Chess Club"
          time="1 day ago"
        />

        <PrivateMessage
          fullName="Rizky Hasanuddin"
          privateMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
          I'm already having lots of fun and improving my game."
          profilePhoto={rizkyHasanuddin}
          text="sent you a private message"
          time="5 days ago"
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
