import { useState } from "react";
import angelaGray from "./assets/avatar-angela-gray.webp";
import annaKim from "./assets/avatar-anna-kim.webp";
import jacobThompson from "./assets/avatar-jacob-thompson.webp";
import kimberlySmith from "./assets/avatar-kimberly-smith.webp";
import markWebber from "./assets/avatar-mark-webber.webp";
import nathanPeterson from "./assets/avatar-nathan-peterson.webp";
import rizkyHasanuddin from "./assets/avatar-rizky-hasanuddin.webp";
import chessImage from "./assets/image-chess.webp";
import CommentNotification from "./components/CommentNotification";
import FollowNotification from "./components/FollowNotification";
import JoinLeaveNotification from "./components/JoinLeaveNotification";
import Navbar from "./components/Navbar";
import PrivateMessage from "./components/PrivateMessage";
import ReactNotification from "./components/ReactNotification";
import "./sass/App.scss";

function App() {
  const [markedAll, setMarkedAll] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="app">
      <header>
        <Navbar
          notifications={notifications}
          onMarkAll={() => {
            setMarkedAll(true);
            setNotifications(0);
          }}
        />
      </header>
      <main>
        <ReactNotification
          fullName="Mark Webber"
          newNotification={markedAll ? false : true}
          post="My first tournament today!"
          profilePhoto={markWebber}
          text="reacted to your recent post"
          time="1m ago"
        />

        <FollowNotification
          fullName="Angela Gray"
          newNotification={markedAll ? false : true}
          profilePhoto={angelaGray}
          text="followed you"
          time="5m ago"
        />

        <JoinLeaveNotification
          fullName="Jacob Thompson"
          newNotification={markedAll ? false : true}
          group="Chess Club"
          profilePhoto={jacobThompson}
          text="has joined your group"
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

        <CommentNotification
          fullName="Kimberly Smith"
          mainUserPhoto={chessImage}
          profilePhoto={kimberlySmith}
          text="commented on your picture"
          time="1 week ago"
        />

        <ReactNotification
          fullName="Nathan Peterson"
          post="5 end-game strategies to increase your win rate"
          profilePhoto={nathanPeterson}
          text="reacted to your recent post"
          time="2 weeks ago"
        />

        <JoinLeaveNotification
          fullName="Anna Kim"
          profilePhoto={annaKim}
          group="Chess Club"
          text="left the group"
          time="2 weeks ago"
        />
      </main>
    </div>
  );
}

export default App;
