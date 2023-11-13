import "../sass/JoinLeaveNotification.scss";

interface Props {
  fullName: string;
  group: string;
  profilePhoto: string;
  text: string;
  time: string;
}

const JoinLeaveNotification = ({
  fullName,
  group,
  profilePhoto,
  text,
  time,
}: Props) => {
  return (
    <article className="joinLeave">
      <picture>
        <img src={profilePhoto} alt="profilePhoto" />
      </picture>
      <div className="profInfo">
        <p>
          <strong className="fullName">{fullName}</strong>
          <span className="text">{text}</span>
          <strong className="group">{group}</strong>
        </p>
        <span className="time">{time}</span>
      </div>
    </article>
  );
};

export default JoinLeaveNotification;
