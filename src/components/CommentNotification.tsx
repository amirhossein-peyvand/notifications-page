import "../sass/CommentNotification.scss";

interface Props {
  fullName: string;
  mainUserPhoto: string;
  newNotification?: boolean;
  profilePhoto: string;
  text: string;
  time: string;
}

const CommentNotification = ({
  fullName,
  mainUserPhoto,
  newNotification,
  profilePhoto,
  text,
  time,
}: Props) => {
  return (
    <article className={`comment ${newNotification && "new"}`}>
      <section className="left">
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
      </section>
      <picture className="right">
        <img src={mainUserPhoto} alt="chess image" />
      </picture>
    </article>
  );
};

export default CommentNotification;
