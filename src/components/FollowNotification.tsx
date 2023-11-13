import "../sass/FollowNotification.scss";

interface Props {
  fullName: string;
  profilePhoto: string;
  text: string;
  time: string;
}

const FollowNotification = ({ fullName, profilePhoto, text, time }: Props) => {
  return (
    <article className="follow">
      <picture>
        <img src={profilePhoto} alt="profilePhoto" />
      </picture>
      <div className="profInfo">
        <p>
          <strong className="fullName">{fullName}</strong>
          <span className="text">{text}</span>
        </p>
        <span className="time">{time}</span>
      </div>
    </article>
  );
};

export default FollowNotification;
