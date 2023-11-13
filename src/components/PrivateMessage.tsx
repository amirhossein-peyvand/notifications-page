import "../sass/PrivateMessage.scss";

interface Props {
  fullName: string;
  privateMessage: string;
  profilePhoto: string;
  text: string;
  time: string;
}

const PrivateMessage = ({
  fullName,
  privateMessage,
  profilePhoto,
  text,
  time,
}: Props) => {
  return (
    <article className="privateMessage">
      <picture>
        <img src={profilePhoto} alt="profilePhoto" />
      </picture>
      <div className="profInfo">
        <p>
          <strong className="fullName">{fullName}</strong>
          <span className="text">{text}</span>
        </p>
        <span className="time">{time}</span>
        <p className="privateMessage">{privateMessage}</p>
      </div>
    </article>
  );
};

export default PrivateMessage;
